import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomsymbol());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 5000);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexnumbers];
};

let generateRandomsymbol = () => {
  let symbols = ["diamond", "club", "heart", "spade"];

  let indexsymbols = Math.floor(Math.random() * symbols.length);
  return symbols[indexsymbols];
};

const boton = document.createElement("button");
boton.type = "button";
boton.innerText = "Haz Click";
document.body.appendChild(boton).onclick;
