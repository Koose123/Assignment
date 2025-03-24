const showBtn = document.querySelector('.show-btn')
const hideBtn = document.querySelector('.hide-btn');
const Paragraph = document.querySelector('.main-container');

showBtn.addEventListener('click',()=>{
    Paragraph.classList.remove('hidden')
    Paragraph.classList.add('show')
})
hideBtn.addEventListener('click',()=>{
    Paragraph.classList.remove('show')
    Paragraph.classList.add('hidden')
})