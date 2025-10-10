function cookpasta() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pasta is ready");
    }, 2000);
  });
}

async function cookfood() {
  console.log("Start Cooking Pasta"); //2
  await cookpasta();
  console.log("Pasta is Ready"); //pause the code //4
  console.log("ready to eat"); //5
}

console.log("Customer Ordered Noodles"); //1
cookfood();
console.log("prepare IceCream"); //3
