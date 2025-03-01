const arrayOfImages = [
  "slider-images/image-1.webp",
  "slider-images/image-2.webp",
  "slider-images/image-3.avif",
  "slider-images/image-4.webp",
  "slider-images/image-5.jpg",
  "slider-images/image-6.png",
  "slider-images/image-7.webp",
  "slider-images/image-8.jpg",
  "slider-images/image-9.jpg",
  "slider-images/image-10.jpg"
];

function loopThrough() {
  const imageDisplay = Math.floor(Math.random()*arrayOfImages.length);
  return arrayOfImages[imageDisplay];  
};

const imageOne = document.createElement("img");
imageOne.classList.add("slideShowImage");
const imageTwo = document.createElement("img");
imageTwo.classList.add("slideShowImage");
const imageSlideShow = document.querySelector(".image-bar-wrapper");

imageOne.src = loopThrough();
imageTwo.src = loopThrough();

if(imageSlideShow){
  imageSlideShow.appendChild(imageOne);
  imageSlideShow.appendChild(imageTwo);

  function updateImages() {
    imageOne.src = loopThrough();
    imageTwo.src = loopThrough();
  };
  setInterval(updateImages,3000);
}else{
  console.error("not working have no idea why..")
};

