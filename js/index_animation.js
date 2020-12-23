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
const $lifeSentence= document.querySelector('.product:nth-of-type(4) > .product__image')
const $crowGang= document.querySelector('.product:nth-of-type(10) > .product__image')
const cuadroVerMasCrow= document.createElement("span"); 
const cuadroVerMasLife= document.createElement("span"); 
cuadroVerMasCrow.innerHTML= "Toca aquí para ver más";
cuadroVerMasLife.innerHTML= "Toca aquí para ver más";
cuadroVerMasCrow.classList.add('viewMore');
cuadroVerMasLife.classList.add('viewMore');

$crowGang.appendChild(cuadroVerMasCrow);
$lifeSentence.appendChild(cuadroVerMasLife);

cuadroVerMasCrow.addEventListener('click', (e)=>{
    cuadroVerMasCrow.parentElement.classList.toggle('vuelta');

    if(cuadroVerMasCrow.parentElement.classList.contains('vuelta')){
        cuadroVerMasCrow.style.transform='rotateY(180deg)';
        cuadroVerMasCrow.parentElement.childNodes[2].style.transform='rotateY(180deg)';
        cuadroVerMasCrow.parentElement.childNodes[0].setAttribute('src','images/Crowgangespalda.jpg');
    }else{
        cuadroVerMasCrow.style.transform='rotateY(0deg)';
        cuadroVerMasCrow.parentElement.childNodes[2].style.transform='rotateY(0deg)';
        cuadroVerMasCrow.parentElement.childNodes[0].setAttribute('src','images/Crowgang.jpg');
    }

});
cuadroVerMasLife.addEventListener('click', (e)=>{
    cuadroVerMasLife.parentElement.classList.toggle('vuelta');

    if(cuadroVerMasLife.parentElement.classList.contains('vuelta')){
        cuadroVerMasLife.style.transform='rotateY(180deg)';
        cuadroVerMasLife.parentElement.childNodes[2].style.transform='rotateY(180deg)';
        cuadroVerMasLife.parentElement.childNodes[0].setAttribute('src','images/Lifesentenceespalda.jpg');
    }else{
        cuadroVerMasLife.style.transform='rotateY(0deg)';
        cuadroVerMasLife.parentElement.childNodes[2].style.transform='rotateY(0deg)';
        cuadroVerMasLife.parentElement.childNodes[0].setAttribute('src','images/Lifesentence.jpg');
    }

});



for (let i = 0; i < $recuadrosCarousel.length; i++) {
    const element = $recuadrosCarousel[i];
    element.addEventListener('mouseenter',()=>{
        element.childNodes[2].style.opacity='1';
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[2].style.opacity='0';
    })
}


