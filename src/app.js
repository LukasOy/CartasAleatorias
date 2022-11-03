/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let relleno = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let simbolo = ["♥", "♠", "♣", "♦"];

  let simbolorandom = simbolo[Math.floor(Math.random() * simbolo.length)];
  let rellenorandom = relleno[Math.floor(Math.random() * relleno.length)];

  console.log(rellenorandom, simbolorandom);
  let Simbolo1 = document.querySelector("#carta1");
  Simbolo1.innerHTML = simbolorandom;
  let SimboloMedio = document.querySelector("#SimboloMedio");
  SimboloMedio.innerHTML = rellenorandom;
  let Simbolo11 = document.querySelector("#carta2");
  Simbolo11.innerHTML = simbolorandom;

  if (simbolorandom == "♥" || simbolorandom == "♦") {
    document.querySelector("#carta1").style.color = "red";
    document.querySelector("#carta2").style.color = "red";
  }
};
/*
let Simbolo11 = document.querySelector("#carta2");
  Simbolo11.innerHTML = simbolorandom;

  let cambioarojo = document.querySelector("#carta1");
    cambioarojo.classList.add("red");

}; 
  */
