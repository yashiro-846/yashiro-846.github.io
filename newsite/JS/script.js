let topback = document.querySelector(".topback");

addEventListener("keypress", function(x) {
    if (x.which == 13) { /*13=Enter*/
        topback.classList.toggle("moving");
    }
    alert(x.which);
})