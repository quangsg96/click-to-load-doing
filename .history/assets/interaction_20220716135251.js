// ============ JAVASCRIPT ============
document.getElementById('btn').onclick = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('wrapper__part1').innerHTML = this.responseText;
  }
  xhttp.open("POST", "https://quangsg96.github.io/index1/");
  xhttp.send();
}

// ============ JQUERY ============
// $(document).ready(function() {
//   $('#btn').click(function() {
//     $('#wrapper').load('./index1.html');
//   });
// });