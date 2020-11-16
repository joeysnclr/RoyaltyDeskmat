function openVariant(variantName) {
  var i;
  var x = document.getElementsByClassName("variant");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(variantName).style.display = "block";
}
