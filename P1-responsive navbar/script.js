// alert("hai")
const menuToggle = document.querySelector('.menu-toggle input')
console.log(menuToggle)
const nav = document.querySelector('nav ul')
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})