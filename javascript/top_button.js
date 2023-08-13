const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    scrollBtn.style.display = "block";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.transition = "opacity 0.3s ease";
    } else {
        scrollBtn.style.opacity = "0";
    }
}

scrollBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
