// //console.log(Array.from(document.querySelectorAll('div.test .my'))[0].parentNode);

// var oldchild = document.getElementById('para');

// var mynew = document.createElement('h1');
// mynew.innerHTML = 'This is my new replaced element';
// mynew.id = 'new';

// console.log(document.querySelector('.test').classList.value);

// console.log(document.querySelector('body').lastChild);


// const my = document.createElement('span');
// my.textContent ='!!!';


// var first = document.querySelector('.para');
// var second = document.querySelector('#para');
// first.appendChild(my);
// second.appendChild(my);

document.querySelector('body').addEventListener('click',(event) => {
    console.log('Listener of body tag : bubbling ', event.target);
});

document.querySelector('.test').addEventListener('click', (event) => {
    console.log('Listener of paragraph tag : capturing ', event.target);
}, true);

document.getElementById('mybtn').addEventListener('click',(event)=>{
    console.log('Listener of target button : bubbling ', event.target);
});