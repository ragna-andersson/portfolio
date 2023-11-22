

function styleCurrentPage() {
  // create array of a elements
  var a = document.getElementById("menu").getElementsByTagName('a');
  // get the page url
  var pageUrl = window.location.href;
  // loop through all a elements
  for (var i = 0; i < a.length; i++) {
    // if a element matches page url, add class
    if (a[i].href === pageUrl) {
      a[i].className = 'currentPage';
    }
  }
}

window.onload = styleCurrentPage;