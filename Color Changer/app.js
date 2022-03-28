// Quick Color Picker based on several colors
const colors = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(60, 179, 113)","rgb(60, 179, 113)","rgb(238, 130, 238)","rgb(255, 165, 0)","rgb(106, 90, 205)"];

// select the button
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    // get random number between 0-5
    const randomNumber = getRandom();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandom() {
    return Math.floor(Math.random()*colors.length);
} 