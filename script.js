const kirby = document.querySelector(".kirby");
const food = document.querySelector(".food");

const foods = [
  "url(https://assets.codepen.io/7237686/cookie.png?format=auto)",
  "url(https://assets.codepen.io/7237686/tomato.png?format=auto)",
  "url(https://assets.codepen.io/7237686/cake.png?format=auto)",
  "url(https://assets.codepen.io/7237686/fries.png?format=auto)",
  "url(https://assets.codepen.io/7237686/pudding.png?format=auto)",
  "url(https://assets.codepen.io/7237686/icecream.png?format=auto)",
  "url(https://assets.codepen.io/7237686/cherry.png?format=auto)",
  "url(https://assets.codepen.io/7237686/orange.png?format=auto)",
  "url(https://assets.codepen.io/7237686/sandwich.png?format=auto)",
  "url(https://assets.codepen.io/7237686/burger.png?format=auto)",
  "url(https://assets.codepen.io/7237686/pancakes.png?format=auto)",
  "url(https://assets.codepen.io/7237686/chicken.png?format=auto)"
];
function getRandomInt() {
  return Math.floor(Math.random() * 12);
}

let index = getRandomInt();
food.style.backgroundImage = foods[index];

kirby.onclick = function () {
  index = getRandomInt();
  const isPaused = kirby.classList.contains("play");
  if (!isPaused) {
    kirby.classList.add("play");
    food.classList.add("eating");
    setTimeout(() => {
      kirby.classList.remove("play");
      food.classList.remove("eating");
      food.style.backgroundImage = foods[index];
    }, 2842);
  }
};