const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector("#btn");
let color = document.querySelector(".color");

btn.addEventListener("click",() => {
    let hexColor = "#";
    for(let i = 0; i < 6;i++){
        hexColor += hex[getRandomColor()];
    }
        color.innerHTML = hexColor;
        document.body.style.backgroundColor = hexColor;
    
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length);

}
