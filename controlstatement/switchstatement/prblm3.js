// Elecricity Traffic Slab
// Take Units Consumed (rounded to nearest 10).
// Use  Switch to Show Cost Slab:
// Case 0,10,20,30 --> "LOW USAGE".
// Case 40,50,60 --> "MODERATE USAGE".
// Case 70,80,90,100 --> "HIGH USAGE".
// Default --> "INVALID OR UNSUPPORTED INPUT".

let Elecricityslab = 50;

switch (Elecricityslab) {
  case 0:
  case 10:
  case 20:
  case 30:
    console.log("LOW USAGE");
    break;
  case 40:
  case 50:
  case 60:
    console.log("MODERATE USAGE");
    break;
  case 70:
  case 80:
  case 90:
  case 100:
    console.log("HIGH USAGE");
    break;
  default:
    console.log("INVALID INPUT");
}
