const funBus = document.querySelectorAll('img')[0];
const map = document.querySelectorAll('img')[1];
const body = document.querySelector('body');
const allPara = document.querySelectorAll('p');
const nav = document.querySelector('nav');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const logoHeading = document.querySelector('.logo-heading');
const destination = document.querySelector('.content-destination');
const destinationH2 = destination.querySelector('h2');
const buttons = document.querySelectorAll('.btn');
const intro = document.querySelector('.intro');

funBus.addEventListener('mouseover', (event) => {
    body.classList.add('blue');
    event.stopPropagation();
})

funBus.addEventListener('mouseout', (event) => {
    body.classList.remove('blue');
    event.stopPropagation();
})

intro.addEventListener('mouseover', () => {
    body.classList.add('pink');
})

intro.addEventListener('mouseout', () => {
    body.classList.remove('pink');
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
    // console.log(event);
    navContainer.classList.add('pink');
})

window.addEventListener('blur', () => {
    navContainer.classList.remove('pink');
})

window.addEventListener('resize', (event) => {
    logoHeading.innerText = `Height: ${window.innerHeight}, Width: ${window.innerWidth}`;
})

window.addEventListener('scroll', (event) => {
    // console.log(event);
    // event.preventDefault;
    destinationH2.innerText = `X: ${window.scrollX} Y: ${window.scrollY}`;
    if(window.scrollY > 700) {
        body.classList.add('blue');
    } else if (window.scrollY <= 700) {
        body.classList.remove('blue');
    }
})

buttons.forEach(button => {
    button.addEventListener('dblclick', (event) => {
        // console.log(event);
        event.currentTarget.parentElement.classList.toggle('pink');
        // .classList.add('blue');
    })
})



navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // console.log(event.currentTarget);
        event.currentTarget.innerText = "Hey!";
        event.preventDefault();
    })
})