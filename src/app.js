/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let relleno = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let simbolo = ["corazon", "pica", "trebol", "diamante"];

  let simbolorandom = simbolo[Math.floor(Math.random() * simbolo.length)];
  let rellenorandome = relleno[Math.floor(Math.random() * relleno.length)];

  console.log(rellenorandome, simbolorandom);

  let carta = document.querySelector(".carta");
  carta[1].innerHTML = relleno[rellenorandome];
  carta[1].innerHTML = simbolo[simbolorandom];
};
