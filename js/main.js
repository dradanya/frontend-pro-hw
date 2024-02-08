const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');

div1.addEventListener('mouseenter' , () => {
    div2.style.display = 'block';
})

div1.addEventListener('mouseleave' , () => {
    div2.style.display = 'none';
})