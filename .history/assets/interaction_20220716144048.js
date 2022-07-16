// ============ JAVASCRIPT ============
document.getElementById('btn').onclick = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
  xhttp.addEventListener('load', function() {
    document.getElementById('wrapper__part1').innerHTML = this.responseText;
    document.getElementById('wrapper__part2').innerHTML = this.responseText;
  })
  xhttp.open("GET", "https://quangsg96.github.io/index1/");
  xhttp.send();
}

// ============ JQUERY ============
// $(document).ready(function() {
//   $('#btn').click(function() {
//     $('#wrapper__part1').load('https://quangsg96.github.io/index1/');
//   });
//   $('#btn2').click(function() {
//     $('#wrapper__part2').load('https://quangsg96.github.io/index2/');
//   });
// });
