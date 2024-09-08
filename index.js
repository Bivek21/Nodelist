let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent += "🤪";
// });

//click Event listener
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });
//Mouseover + mouseOut event Listener
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = " rgb(85, 85, 181)";
  });
});
