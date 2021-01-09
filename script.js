//declration des variables
let btnPlus = document.querySelectorAll(".plus");
let qte = document.querySelectorAll(".qte");
// function plus
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    var price = prices[i].innerHTML;
    total = total + Number(price.replace("$", ""));
    qteT.innerHTML = total;
  });
}
//declaration variables
var total = 0;
let btnMoins = document.querySelectorAll(".moins");
let prices = document.querySelectorAll(".card-text");
let qteT = document.querySelector(".qteT");

// function moins
for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", () => {
    var price = prices[i].innerHTML;
    price.replace("$", "");

    if (Number(qte[i].innerHTML) > 0) {
      total = total - Number(price.replace("$", ""));

      qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
      qteT.innerHTML = total; // total est un nombre ? et pourquoi on a créé cette variable total ?
    }
  });
}

// class cards
const whiteHeart = "\u2661";
const redHeart = "\u2764";
const buttons = document.querySelectorAll(".heart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const like = button.innerHTML;
    if (like == whiteHeart) {
      button.innerHTML = redHeart;
    } else {
      button.innerHTML = whiteHeart;
    }
  });
});

//remove article
let closebtn = document.querySelector(".Exit");
closebtn.addEventListener("onclick", remove);

//function remove article
var closebtnVar = closebtn.parentNode;
console.log(closebtnVar);
function remove() {
  closebtnVar.remove();
  total = total - Number(price.replace("$", ""));
}
