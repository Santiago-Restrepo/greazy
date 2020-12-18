// let $CarouselMobile= document.querySelector(".catalog__carousel-mobile");
// let $carouselItems = document.querySelectorAll(".product");
// let contador= 1;
// let width = $carouselItems[0].clientWidth;
// let intervalo= 1000;


// setInterval(()=>{
//     slides();
// },intervalo);



// function slides(){
//     $CarouselMobile.style.transform = "translatex("+(-screen.width*contador)+"px)"; 
//     $CarouselMobile.style.transition = "transform .5s"; 
//     contador++;
//     if(contador == $carouselItems.length){
//         setTimeout(()=>{
//             $CarouselMobile.style.transform = "translatex(0px)"; 
//             $CarouselMobile.style.transition = "transform 0s"; 
//             contador=0;
//         }, 500)
//     }
    
    
// }

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 700,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});
});