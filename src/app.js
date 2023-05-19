import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#phrase").innerHTML = generateExcuse();
};
const generateExcuse = () => {
  const blamer = [
    "My dog",
    "My platypus",
    "My hedgehog",
    "My brother",
    "My turtle",
    "My shark"
  ];
  const action = ["ate", "destroyed", "putted fire on", "sold"];
  const avoid = [
    "my passport",
    "my homework",
    "my 4geeks project",
    "my macbook"
  ];
  const when = [
    "five minutes ago",
    "10 minutes ago",
    "yesterday",
    "today",
    "when I was born"
  ];

  const getRandomExcuse = arr => arr[Math.floor(Math.random() * arr.length)];

  return `${getRandomExcuse(blamer)} ${getRandomExcuse(
    action
  )} ${getRandomExcuse(avoid)} ${getRandomExcuse(when)}`;
};
