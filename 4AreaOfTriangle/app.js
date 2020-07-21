
function heronsFormula() {
  var a = document.getElementById("side_1").value;
  var b = document.getElementById("side_2").value;
  var c = document.getElementById("side_3").value;
  var p = (a + b + c) / 2;
  var result = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  document.getElementById('result').innerHTML = result;
}
