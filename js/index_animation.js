// const $logos= document.querySelectorAll(".greazyRotate")

// function addLogo(){
//     $logos[0].classList.add('logo')
//     $logos[1].classList.add('logo')
// }
// function removeLogo(){
//     $logos[0].classList.remove('logo')
//     $logos[1].classList.remove('logo')
// }

// setInterval(()=>{
//     setTimeout(addLogo(), 4000);
//     removeLogo();
// },4000);
const $recuadrosCarousel= document.querySelectorAll('.product__image');


for (let i = 0; i < $recuadrosCarousel.length; i++) {
    const element = $recuadrosCarousel[i];
    element.addEventListener('mouseenter',()=>{
        element.childNodes[2].style.opacity='1';
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[2].style.opacity='0';
    })
}
