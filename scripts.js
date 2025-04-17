
function menuDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
  var x = document.getElementById('rect');
  if (x.style.visibility === 'visible') {
    x.style.visibility = 'hidden';
  } else {
    x.style.visibility = 'visible';
  }
}

