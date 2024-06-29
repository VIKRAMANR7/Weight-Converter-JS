let kgs = document.querySelector(".kgs");
let pound = document.querySelector(".pounds");
let ounce = document.querySelector(".ounces");

kgs.addEventListener("input", () => {
  let kgToPounds = (kgs.value * 2.2).toFixed(2);
  let kgToOunces = (kgs.value * 35.27).toFixed(2);
  pound.value = kgToPounds;
  ounce.value = kgToOunces;
});

pound.addEventListener("input", () => {
  let poundsToKg = (pound.value * 0.4).toFixed(2);
  let poundsToOunces = (pound.value * 16).toFixed(2);
  kgs.value = poundsToKg;
  ounce.value = poundsToOunces;
});

ounce.addEventListener("input", () => {
  let ouncesToKg = (ounce.value * 0.0283).toFixed(2);
  let ouncesToPound = (ounce.value / 0.0625).toFixed(2);
  kgs.value = ouncesToKg;
  pound.value = ouncesToPound;
});
