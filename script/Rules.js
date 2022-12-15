
// les lettres qui s'activent en jaune

// let div1 = document.querySelector('#d1');
// let div2 = document.querySelector('#d2');

let spanF = document.querySelector('#spanF');
let locationF = document.querySelector('#locationF');

// div1.addEventListener('mouseenter', changeColor);
// div1.addEventListener('mouseout', changeColor2);

function changeColor(){
    locationF.style.backgroundColor = 'yellow';
}

function changeColor2(){
    locationF.style.backgroundColor  = 'rgb(69, 201, 197)';
  
}

spanF.addEventListener('mouseenter', changeColor);
spanF.addEventListener('mouseout', changeColor2);

let spanA = document.querySelector('#spanA');
let locationA = document.querySelector('#locationA');

function changeColor3(){
    locationA.style.backgroundColor = 'yellow';
}

function changeColor4(){
    locationA.style.backgroundColor  = 'rgb(69, 201, 197)';
}

spanA.addEventListener('mouseenter', changeColor3);
spanA.addEventListener('mouseout', changeColor4);



let spanB = document.querySelector('#spanB');
let locationB = document.querySelector('#locationB');

function changeColor5(){
    locationB.style.backgroundColor = 'yellow';
}

function changeColor6(){
    locationB.style.backgroundColor  = 'rgb(69, 201, 197)';
}

spanB.addEventListener('mouseenter', changeColor5);
spanB.addEventListener('mouseout', changeColor6);




