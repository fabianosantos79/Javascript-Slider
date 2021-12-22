let totalSlides = document.querySelectorAll('.slider_item').length;

document.querySelector('.slider_width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider_controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

let contadorSlide = 0;

function goPrev(){
    contadorSlide --;
    if(contadorSlide < 0){
        contadorSlide = totalSlides - 1;
    }
    updateMargin();
}


function goNext(){
    contadorSlide ++;
    if(contadorSlide > 2){
        contadorSlide = 0;
    }
    updateMargin();
}


function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider_item').clientWidth;

    let newMargin = (contadorSlide * sliderItemWidth);

    document.querySelector('.slider_width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);