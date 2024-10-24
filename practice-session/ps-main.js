//Students, write your code on the next line



//Starter code
const body = document.querySelector('body');

function showFavoriteColor(){
    let color = prompt("What's your favorite color?");
    console.log(color);
    body.style.backgroundImage = "none";
    body.style.backgroundColor = color;
}