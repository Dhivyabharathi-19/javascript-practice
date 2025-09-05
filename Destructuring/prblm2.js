// Tasks:

// Get the first product’s brand name as firstBrand.

// Get the third feature of the first product as firstProductThirdFeature (default "No third feature" if missing).

// Get the second product’s second feature as secondProductSecondFeature (default "No second feature" if missing).

// Extract lat and long into separate variables from the coordinates.

// Get postalCode from shipping.warehouse.location (default "000000" if missing).
const ecommerce = {
  storeName: "MegaShop",
  products: [
    {
      id: 1,
      details: {
        name: "Laptop",
        price: 75000,
        specs: {
          brand: "TechBrand",
          features: ["16GB RAM", "512GB SSD", "Touchscreen"],
        },
      },
    },
    {
      id: 2,
      details: {
        name: "Smartphone",
        price: 40000,
        specs: {
          brand: "PhonePro",
          features: ["128GB Storage"],
        },
      },
    },
  ],
  shipping: {
    warehouse: {
      location: {
        city: "Mumbai",
        coordinates: {
          lat: 19.076,
          long: 72.8777,
        },
      },
    },
    country: "India",
  },
};

let {
  products: [
    {
      details: {
        specs: {
          brand: firstBrand,
          features: [, , firstProductThirdFeature = "No third feature"],
        },
      },
    },
    {
      details: {
        specs: {
          features: [, secondProductSecondFeature = "No second feature"],
        },
      },
    },
  ],
  shipping: {
    warehouse: {
      location: {
        coordinates: { lat, long },
        postalCode = "000000",
      },
    },
  },
} = ecommerce;

console.log(firstBrand);
console.log(firstProductThirdFeature);
console.log(secondProductSecondFeature);
console.log(lat);
console.log(long);
console.log(postalCode);
