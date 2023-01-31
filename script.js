// MY FIRST DRAFT CODE
// const nextSlide = () => {
    // Need to somehow move to the next image
    // Maybe by adjusting width of each img besides the one being selected to 0px?
    // Maybe by adding a visibility adjuster, like targetting the selected picture and toggling it's display from "none" to "" or "block"?
    // Maybe have all image dimensions defaulted to very tiny, and then target the one selected and "expand" it by
    // adding a z-index of 1 to it, and increasing it's dimensions to fill the slideshow
    // Connect this function to the nextArrow button, but probably using queryselector statement, and a click event
//    const nextArrow = document.querySelector(".nextArrow");
//    nextArrow.addEventListener("click", {})
    // Call the arrow function
//    backArrow();
// };

// const previousSlide = () => {
    // Need to somehow move to the next image
    // Maybe by adjusting width of each img besides the one being selected to 0px?
    // Maybe by adding a visibility adjuster, like targetting the selected picture and toggling it's display from "none" to "" or "block"?
    // Maybe have all image dimensions defaulted to very tiny, and then target the one selected and "expand" it by
    // adding a z-index of 1 to it, and increasing it's dimensions to fill the slideshow
    // Connect this function to the backArrow button, but probably using queryselector statement, and a click event
//    const backArrow = document.querySelector(".backArrow");
//    backArrow.addEventListener("click", {})
    // Call the arrow function
//    backArrow();
// };

// const navCircle = () => {
    // Need to add functionality to the empty nav circles under the images
    // Need to manipulate css of selected circle to FILL when the corresponding image is on screen or focused or centered
    // Need to link each circle to its image
    // Need to add a click event on each circle that jumps to it's corresonding image 
// };

// ------------------------------------------------------------------------------------------------------------------------------------

// MY FINAL DRAFT CODE //

// Declare variables and target document to store query selected classes from index file
const back = document.querySelector(".back-btn");
const next = document.querySelector(".next-btn");
const images = document.querySelector(".slide").children;

// Variables for looping and changing image selection functionality
const totalImages = images.length;
let index = 0;

// Event Listeners on back and next arrows to change image on click
back.addEventListener("click", () => {
    nextImage("next");
});
next.addEventListener("click", () => {
    nextImage("back");
});

function nextImage(direction) {
    if(direction === "next") {
        index++;
        if(index === totalImages) {
            index = 0;
        }
    } else {
        if(index === 0) {
            index = totalImages -1;
        } else {
            index--;
        }
    }

    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove("main");
    }
    images[index].classList.add("main");
}