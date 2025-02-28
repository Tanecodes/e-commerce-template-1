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

function slider() {
  const randomIndex = Math.floor(Math.random()*arrayOfImages.length);
  const imageBar = document.querySelector(".img-bar-wrapper");
  
};

slider();