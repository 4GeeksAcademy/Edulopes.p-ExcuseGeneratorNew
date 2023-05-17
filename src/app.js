/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#phrase").innerHTML = generateExcuse();
};
let generateExcuse = () => {
  let blamer = [
    "My dog",
    "My platypus",
    "My hedgehog",
    "My brother",
    "My turtle",
    "My shark"
  ];
  let action = ["ate", "destroyed", "putted fire on", "sold"];
  let avoid = ["my passport", "my homework", "my 4geeks project", "my macbook"];
  let when = [
    "five minutes ago",
    "10 minutes ago",
    "yesterday",
    "today",
    "when I was born"
  ];

  let blamerIndex = Math.floor(Math.random() * blamer.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let avoidIndex = Math.floor(Math.random() * avoid.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    blamer[blamerIndex] +
    " " +
    action[actionIndex] +
    " " +
    avoid[avoidIndex] +
    " " +
    when[whenIndex]
  );
};
