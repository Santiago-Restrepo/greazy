const $recuadrosCarousel= document.querySelectorAll('.product__container__image,.productDouble__container__image');
const productDoubleCarousel= document.querySelectorAll('.productDouble');
const RECUADROS_VIEW_MORE= document.querySelectorAll('.viewMore');
const CAROUSEL= document.querySelector('.carousel__lista');
const turnImage= (e)=>{
    let view_more= e.target;
    let product_double= view_more.parentElement.parentElement;
    let product_double_image= product_double.firstElementChild;
    let first_image= product_double_image.firstElementChild;
    let second_image= product_double_image.childNodes[1];
    let contacto= product_double_image.lastElementChild;
    let discount= product_double_image.childNodes[3];
    let newColection= product_double_image.childNodes[4];
    product_double_image.classList.toggle('vuelta');
    product_double_image.childNodes[1].classList.toggle('vuelta');
    view_more.classList.toggle('vuelta');
    contacto.classList.toggle('vuelta');
    discount.classList.toggle('vuelta');
    newColection.classList.toggle('vuelta');
    first_image.classList.toggle('hide');
    second_image.classList.toggle('hide');
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    CAROUSEL.removeChild(CAROUSEL.firstElementChild);
    CAROUSEL.removeChild(CAROUSEL.lastElementChild);
}

for (let i = 0; i < RECUADROS_VIEW_MORE.length; i++) {
    const element = RECUADROS_VIEW_MORE[i];
    element.addEventListener('click', turnImage);
}


for (let i = 0; i < $recuadrosCarousel.length; i++) {
    const element = $recuadrosCarousel[i];
    element.addEventListener('mouseenter',()=>{
        element.lastElementChild.style.opacity='1';
    })
    element.addEventListener('mouseleave',()=>{
        element.lastElementChild.style.opacity='0';
    })
}


