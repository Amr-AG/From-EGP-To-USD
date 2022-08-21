let egp = document.querySelector("form .egp");
let usd = document.querySelector("form .usd");
let conv = document.querySelector(".convert");

console.log(egp);
console.log(usd);
console.log(conv);

egp.onchange = function () {
  if (egp.value <= 0 && egp.value === "") {
    egp.value = 0;
    usd.value = 0;
    preventdefault();
  } else {
    usd.value = (egp.value / 19.14).toFixed(2);
  }
  return;
};
conv.onclick = function () {
  if (egp.value <= 0 && egp.value === "") {
    egp.value = 0;
    usd.value = 0;
    preventdefault();
  } else {
    usd.value = (egp.value / 19.14).toFixed(2);
  }
  return;
};
