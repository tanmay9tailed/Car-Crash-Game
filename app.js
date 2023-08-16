const bike = document.getElementById("bike");
const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
const container = document.querySelector(".container");
const result = document.querySelector(".result-container");
const audio1 = document.querySelector("#audio1");
const audio2 = document.getElementById("audio2");
let score = 0;
const scoree = document.querySelector(".score");

window.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    let carright = parseInt(
      this.window.getComputedStyle(bike).getPropertyValue("left")
    );
    if (carright < 506) {
      bike.style.left = carright + 90 + "px";
      audio1.play();
    }
  }
  if (e.keyCode == "37") {
    let carright = parseInt(
      this.window.getComputedStyle(bike).getPropertyValue("left")
    );
    if (carright > 56) {
      bike.style.left = carright - 90 + "px";
      audio1.play();
    }
  }

  if (e.keyCode == "40") {
    let carbottom = parseInt(
      this.window.getComputedStyle(bike).getPropertyValue("top")
    );
    if (carbottom < 523) {
      bike.style.top = carbottom + 60 + "px";
      audio1.play();
    }
  }
  if (e.keyCode == "38") {
    let carbottom = parseInt(
      this.window.getComputedStyle(bike).getPropertyValue("top")
    );
    if (carbottom > 23) {
      bike.style.top = carbottom - 60 + "px";
      audio1.play();
    }
  }
});
// car.style.animationDirection='2s'
car1.addEventListener("animationiteration", function () {
  let rand = Math.floor(Math.random() * 6) * 90;
  car1.style.left = 56 + rand + "px";
  score++;
  scoree.innerText = score;
});
car2.addEventListener("animationiteration", function () {
  let rand = Math.floor(Math.random() * 6) * 90;
  car2.style.left = 56 + rand + "px";
});

// setInterval(()=>{
//   let ani = parseFloat(window.getComputedStyle(car,null).getPropertyValue("animation-duration"));
//   console.log(ani)
//   if(ani>1){
//     ani -= 0.1;
//   car.style.animationDuration = ani+'s';
//   }
// },1000)

setInterval(function gameover() {
  var biketop = bike.offsetTop;
  var bikeleft = bike.offsetLeft;
  var bikeRight = bikeleft + 74;
  var bikeBottom = biketop + 142;

  var car1top = car1.offsetTop;
  var car1left = car1.offsetLeft;
  var car1Right = car1left + 76;
  var car1Bottom = car1top + 125;

  var car2top = car2.offsetTop;
  var car2left = car2.offsetLeft;
  var car2Right = car2left + 76;
  var car2Bottom = car2top + 125;

  if (
    ((bikeBottom > car1top && biketop < car1Bottom) ||
      (bikeBottom < car1top && biketop > car1Bottom)) &&
    ((bikeRight > car1left && bikeleft < car1Right) ||
      (bikeRight < car1left && bikeleft > car1Right))
  ) {
    container.style.display = "none";
    result.style.display = "block";
    audio2.play();
  }

  if (
    ((bikeBottom > car2top && biketop < car2Bottom) ||
      (bikeBottom < car2top && biketop > car2Bottom)) &&
    ((bikeRight > car2left && bikeleft < car2Right) ||
      (bikeRight < car2left && bikeleft > car2Right))
  ) {
    container.style.display = "none";
    result.style.display = "block";
    audio2.play();
  }
}, 10);
