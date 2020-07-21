var today = new Date();
var weekday = today.getDay();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var ampm;

if (hours < 12) {
  ampm = "AM";
} else {
  hours -= 12;
  ampm = "PM";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

minutes = checkTime(minutes);
seconds = checkTime(seconds);

document.getElementById('day').innerHTML = `Today is: ${daysOfWeek[weekday]}`;
document.getElementById('time').innerHTML = `The current time is ${hours} : ${minutes} : ${seconds}  ${ampm}`;
