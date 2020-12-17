let $CarouselMobile= document.querySelector(".carousel__mobile");
let $carouselItems = document.querySelectorAll(".product");
let contador= 1;
let width = $carouselItems[0].clientWidth;
let intervalo= 1000;


setInterval(()=>{
    slides();
},intervalo);

window.addEventListener('resize', ()=>{
    console.log(screen.width)
})

function slides(){
    $CarouselMobile.style.transform = "translatex("+(-screen.width*contador)+"px)"; 
    $CarouselMobile.style.transition = "transform .5s"; 
    contador++;

    if(contador == $carouselItems.length){
        setTimeout(()=>{
            $CarouselMobile.style.transform = "translatex(0px)"; 
            $CarouselMobile.style.transition = "transform 0s"; 
            contador=0;
        }, 1500)
    }
    
    
}