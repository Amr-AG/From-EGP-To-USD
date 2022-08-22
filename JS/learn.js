let from = document.querySelector("form .from");
let to = document.querySelector("form .to");
let selectFrom = document.querySelector(".select-from ");
let selectTo = document.querySelector(".select-To ");
console.log(from);
console.log(to);
console.log(selectFrom);
console.log(selectTo);

if (selectFrom.value === "EGP") {
  from.onchange = function () {
    if (from.value < 0) {
      from.value = 0;
      usd.value = 0;
      preventdefault();
    } else {
      to.value = (from.value / 19.14).toFixed(2);
    }
    return;
  };
}

selectFrom.addEventListener("change", () => {
  if (selectFrom.value === "EGP") {
    selectTo.value = "USD";
    from.onchange = function () {
      if (from.value < 0) {
        from.value = 0;
        usd.value = 0;
        preventdefault();
      } else {
        to.value = (from.value / 19.14).toFixed(2);
      }
      return;
    };
  }

  if (selectFrom.value === "USD") {
    selectTo.value = "EGP";
    from.onchange = function () {
      if (from.value < 0) {
        from.value = 0;
        to.value = 0;
        preventdefault();
      } else {
        to.value = (from.value * 19.14).toFixed(2);
      }
      return;
    };
  }
});

