const cat = document.querySelector('.cat')

let mgtop = 0;
let mgleft = 0;
let step = 30;


function toRight(){
    mgleft += step;
}

function toLeft(){
    mgleft -= step;
}

function toTop(){
    mgtop -= step;
}

function toBottom(){
    mgtop += step;
}

function moveCat(){
    cat.style.marginTop = mgtop + 'px';
    cat.style.marginLeft = mgleft + 'px';
}

document.addEventListener('keydown', (event) => {

    if (event.code === 'KeyW'){
        toTop();
    }
    else if (event.code === 'KeyS'){
        toBottom();
    }
    else if (event.code === 'KeyD'){
        toRight();
    }
    else if (event.code === 'KeyA'){
        toLeft();
    }

    moveCat();
})