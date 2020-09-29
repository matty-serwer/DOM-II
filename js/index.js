const funBus = document.querySelectorAll('img')[0];
const map = document.querySelectorAll('img')[1];
const body = document.querySelector('body');
const allPara = document.querySelectorAll('p');
const nav = document.querySelector('nav');
const navContainer = document.querySelector('.nav-container');
const header = document.querySelector('header');

funBus.addEventListener('mouseover', () => {
    body.classList.add('blue');
})

funBus.addEventListener('mouseout', () => {
    body.classList.remove('blue');
})

document.addEventListener('keydown', (event) => {
    // console.log(event);
    if(event.code === "Space") {
        allPara.forEach(para => {
            para.classList.add('bigText');
        })
        event.preventDefault();
    }
})

document.addEventListener('keyup', (event) => {
    // console.log(event);
    if(event.code === "Space") {
        allPara.forEach(para => {
            para.classList.remove('bigText');
        })
        event.preventDefault();
    }
})

map.addEventListener('wheel', (event) => {
    // console.log(event);
    map.classList.add('tinyPicture');
})   

window.addEventListener('focus', (event) => {
    console.log(event);
    navContainer.classList.add('pink');
})

window.addEventListener('blur', () => {
    navContainer.classList.remove('pink');
})