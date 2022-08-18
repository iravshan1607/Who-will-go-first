let form = document.querySelector(".form");
let input = document.querySelector(".masofa");
let paragraphWalk = document.querySelector(".walk");
let paragraphBike = document.querySelector(".bike");
let paragraphCar = document.querySelector(".car");
let paragraphPlane = document.querySelector(".plane");

let walk = 3.6;
let bike = 20.1;
let car = 70;
let plane = 800;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (input.value.lenght != 0) {
    input = Number(input.value);
    if (!isNaN(input)) {
      if (input > 0) {
        let resultWalk = input / walk; //soat
        let resultMinWalk = (resultWalk - Math.floor(resultWalk)) * 60; //minut
        let resultSecWalk = (resultMinWalk - Math.floor(resultMinWalk)) * 60; //sekund

        paragraphWalk.textContent =
          Math.floor(resultWalk) +
          " " +
          "soat" +
          " " +
          Math.floor(resultMinWalk) +
          " " +
          "minut" +
          " " +
          Math.floor(resultSecWalk) +
          " " +
          "sekund";

        let resultBike = input / bike; //soat
        let resultMinBike = (resultBike - Math.floor(resultBike)) * 60; //minut
        let resultSecBike = (resultMinBike - Math.floor(resultMinBike)) * 60; //sekund

        paragraphBike.textContent =
          Math.floor(resultBike) +
          "  " +
          "soat" +
          " " +
          Math.floor(resultMinBike) +
          " " +
          "minut" +
          " " +
          Math.floor(resultSecBike) +
          " " +
          "sekund";

        let resultCar = input / car; //soat
        let resultMinCar = (resultCar - Math.floor(resultCar)) * 60; //minut
        let resultSecCar = (resultMinCar - Math.floor(resultMinCar)) * 60; //sekund

        paragraphCar.textContent =
          Math.floor(resultCar) +
          " " +
          "soat" +
          " " +
          Math.floor(resultMinCar) +
          " " +
          "minut" +
          " " +
          Math.floor(resultSecCar) +
          " " +
          "sekund";

        let resultPlane = input / plane; //soat
        let resultMinPlane = (resultPlane - Math.floor(resultPlane)) * 60; //minut
        let resultSecPlane = (resultMinPlane - Math.floor(resultMinPlane)) * 60; //sek

        paragraphPlane.textContent =
          Math.floor(resultPlane) +
          " " +
          "soat" +
          " " +
          Math.floor(resultMinPlane) +
          " " +
          "minut" +
          " " +
          Math.floor(resultSecPlane) +
          " " +
          "sekund";
      } else {
        alert("0 dan katta qiymat kiriting");
      }
    } else {
      alert("Iltimos raqamli malumot kiriting");
    }
  } else {
    alert("Iltimos maydonni to'ldiring");
  }
});
