// ============ JAVASCRIPT ============
document.getElementById('btn').onclick = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('wrapper__part1').innerHTML = this.responseText;
  }
  xhttp.open("GET", "https://quangsg96.github.io/index1/");
  xhttp.send();
}
document.getElementById('btn2').onclick = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('wrapper__part2').innerHTML = this.responseText;
  }
  xhttp.open("GET", "https://quangsg96.github.io/index2/");
  xhttp.send();
}

// ============ JQUERY ============
// $(document).ready(function() {
//   $('#btn').click(function() {
//     $('#wrapper').load('./index1.html');
//   });
// });