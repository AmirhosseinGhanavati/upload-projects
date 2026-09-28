var menuIcon=document.querySelector('.hambergur-menu')
var navbar=document.querySelector('.ul-list')

menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle("ul-list-change")
})

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("ul-list-change")
})