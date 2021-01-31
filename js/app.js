$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'

});  
let hamberger = document.querySelector('.hamberger');
let closeBtn = document.querySelector('.btn-close');
let mobileNav = document.querySelector('.mobile-nav')

hamberger.addEventListener('click',function(){
mobileNav.classList.add('open');
});
closeBtn.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});  
});