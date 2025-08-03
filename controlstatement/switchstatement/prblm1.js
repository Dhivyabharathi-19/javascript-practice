// Weekday vs Weekend
// Take  a day name ("Monday" ,"Tuesday" ... "sunday").
// Use Switch to Check:
// If it's "Monday" ... "Friday" print "Its a weekday".
// If it's "Saturday" or "Sunday" print "Its a Weekend".
// Else ->Print "Invalid Day".

let Dayname = "Sunday";
switch (Dayname) {
  case "Monday":
  case "Tuesday":
  case " Wednesday":
  case "Thursady":
  case "Friday":
    console.log("ITS A WEEKDAY");
    break;

  case "Saturday":
  case "Sunday":
    console.log("ITS A WEEKEND");
    break;

  default:
    "INVALID DAY";
}
