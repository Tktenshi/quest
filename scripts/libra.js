var $blocks = document.querySelector('.blocks');
var main = document.querySelector('body'); //ГОВНОКОДИЩЕ, СЖЕЧЬ НАХУЙ!!!!

var $left = document.querySelector('#left');
var $right = document.querySelector('#right');
$left.addEventListener('dragenter', handleDragEnter, false);
$right.addEventListener('dragenter', handleDragEnter, false);
$left.addEventListener('dragleave', handleDragLeave, false);
$right.addEventListener('dragleave', handleDragLeave, false);
$left.addEventListener('dragover', handleDragOver, false);
$right.addEventListener('dragover', handleDragOver, false);
// $left.addEventListener('drop', handleDrop, false);
// $right.addEventListener('drop', handleDrop, false);

var currentSide = false;

var initBlocks = function () {
    var targetBlock = randomInteger(0,7);
    for (var i = 0; i < 8; i++) {
        var block = document.createElement('div');
        block.classList.add('block');
        block.setAttribute('weight', targetBlock === i ? '2' : '1');
        block.setAttribute('draggable', 'true');
        block.innerHTML = '<span>'+ (i+1) +'</span>';
        block.addEventListener('dragstart', handleDragStart, false);
        block.addEventListener('dragend', handleDragEnd, false);
        block.addEventListener('drop', handleDrop, false);
        //block.addEventListener('dragenter', handleDragEnter, false);
        block.addEventListener('dragover', handleDragOver, false);
        // block.addEventListener('dragleave', handleDragLeave, false);
        $blocks.appendChild(block);
    }
};

initBlocks();

function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
    $left.classList.add('drag-start');
    $right.classList.add('drag-start');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
    currentSide = e.target;
    console.log("DRAG ENTER", e.target);
    var blocks = document.querySelectorAll('.libra .block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
}

function handleDragLeave(e) {
    this.classList.remove('over');
    currentSide = false;
    console.log('DRAG LEAVE');
    var blocks = document.querySelectorAll('.libra .block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = '';
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    return false;
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    console.log('DRAG END', e.target, currentSide);
    if (currentSide)
        currentSide.appendChild(e.target);
    $left.classList.remove('drag-start');
    $right.classList.remove('drag-start');
    $left.classList.remove('over');
    $right.classList.remove('over');
    var blocks = document.querySelectorAll('.libra .block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = '';
    }
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function check() {
    var leftSum = 0, rightSum = 0;

    var blocks = document.querySelectorAll('#left .block');
    for (var i = 0; i < blocks.length; i++) {
        leftSum += +blocks[i].getAttribute('weight');
    }

    blocks = document.querySelectorAll('#right .block');
    for (i = 0; i < blocks.length; i++) {
        rightSum += +blocks[i].getAttribute('weight');
    }
    console.log(leftSum, rightSum);
    if(leftSum > rightSum){
        alert('левая тяжелее')
    } else if (leftSum === rightSum) {
        alert('равны')
    } else {
        alert('правая тяжелее')
    }
}