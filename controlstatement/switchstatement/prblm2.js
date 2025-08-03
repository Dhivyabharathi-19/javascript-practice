// Meal Time Based on Hour
// Take an hour as input (0 to 23) and use switch to decide meal.
// Case 7,8,9 -> "BreakFast Time".
// Case 12,13 -> "Lunch Time".
// Case 19,20 -> "Dinner Time".
// Default -> "Snack Time".
// (Group Multiple Hours into Same Case Block).

let MealTime = 19;

switch (MealTime) {
  case 7:
  case 8:
  case 9:
    console.log("BREAKFAST TIME");
    break;
  case 12:
  case 13:
    console.log("LUNCH TIME");
    break;
  case 19:
  case 20:
    console.log("DINNER TIME");
    break;

  default:
    console.log("SNACK TIME");
}
