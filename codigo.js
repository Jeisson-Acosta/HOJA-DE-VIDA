const button = document.querySelector('.svg');
const nav = document.querySelector('.nav');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})