function washing(clothes) {
  console.log("Clothes loaded into the washing machine...");

  setTimeout(() => {
    console.log("Washing completed");
    clothes();
  }, 2000);
}
function wetclothes() {
  console.log("Clothes are  wet.");
}
washing(wetclothes);
