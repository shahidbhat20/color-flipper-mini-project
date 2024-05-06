const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.querySelector("#btn");
let color = document.querySelector(".color");


btn.addEventListener("click", () => {
   let randomNumber = getRandomNumber();
  // console.log(randomNumber);
   // let btnClick = btn.getAttribute("id");
   document.body.style.backgroundColor = colors[randomNumber];
   color.innerHTML = colors[randomNumber];
});

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
}



