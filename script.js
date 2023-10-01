const btn = document.querySelector('.btn');
const message = document.querySelector('.message-txt');
const id = document.querySelector('.id');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvice(data.slip));
}

function displayAdvice (advice){
    message.textContent = advice.advice;
    id.textContent = advice.id;
}

btn.addEventListener('click',getAdvice)