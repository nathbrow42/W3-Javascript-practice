var today = new Date();

var month = today.getMonth() + 1;
var day = today.getDay() + 1;
var year = today.getFullYear();

function leadingZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

month = leadingZero(month);
day = leadingZero(day);

document.getElementById('date').innerHTML = `${month}/${day}/${year}`;
