document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
      document.querySelector("#preloader").style.visibility = "visible";
    } else {
      document.querySelector("#preloader").style.display = "none";
    }
  };
  