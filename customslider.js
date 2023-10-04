// select all the images by their class name
const slides = document.querySelectorAll(".slide")
var counter=0;

//loop at every index of the slide
slides.forEach(
    (slide,index)=>{
        slide.style.bottom = `${index * 100}%`//left,top,right
    }
)

const slideImg= ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateY(${counter * 100}%)`//X ,-$
        }
    )
    }
    

const goPrev=()=>{
    counter--
    slideImg()
}

const goNext=()=>{
    counter++
    slideImg()
}


