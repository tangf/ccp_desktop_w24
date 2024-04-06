

function myFunction(id) {
    var moreText = document.getElementById(id);
    var btnText = document.getElementById("myBtn");
       
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Hide Recipe Details"; 
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "See Recipe Details"; 
      moreText.style.display = "none";
    }
}

