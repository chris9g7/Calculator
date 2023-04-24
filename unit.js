let feet = document.getElementById("feet");

let cm = document.getElementById("cm");

feet.addEventListener("input", function () {
  let ft = this.value * 30.48;
  cm.value = ft.toFixed(2);

  // css part
  cm.classList = "list";
});

cm.addEventListener("input", function () {
  let cm = this.value / 30.48;

  // feet.value = Math.trunc(In) for no decimal value

  feet.value = cm.toFixed(2); // for fixed decimal value

  feet.classList = "list";
});
