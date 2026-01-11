function toggleContent() {
    var moreText = document.getElementById("moreContent");
    var buttonText = event.target; 

    if (moreText.style.display == "none") {
      moreText.style.display = "block";
      buttonText.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      buttonText.innerHTML = "Read more";
    }
  }