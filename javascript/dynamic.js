const toolBar = document.getElementsByClassName("toolbar");
const myButtons = document.getElementsByClassName("redirection_button");
const menu = document.getElementById("menu_txt");
const box = document.getElementsByClassName("Box");

const targetElement = document.getElementById("navigation_bar");
const initialHeight = targetElement.clientHeight;

for (let i = 0; i < toolBar.length; i++) {
    toolBar[i].addEventListener("mouseover", () => {
        toolBar[i].style.color = "#333";
        toolBar[i].style.fontSize = "1.4em";
        toolBar[i].style.transition = "color 0.3s ease";
        toolBar[i].style.transition = "font-size 0.3s ease";
    });

    toolBar[i].addEventListener("mouseout", () => {
        toolBar[i].style.color = "";
        toolBar[i].style.fontSize = "1em";
    });
}

for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("mouseover", () => {
        myButtons[i].style.fontSize = "1.7em";
        myButtons[i].style.transition = "font-size 0.3s ease";
    });

    myButtons[i].addEventListener("mouseout", () => {
        myButtons[i].style.fontSize = "1.6em";
    });
}

menu.addEventListener("mouseover",
    function () {
        menu.style.fontSize = "2em";
        menu.style.transition = "font-size 0.3s ease";
    }
);

menu.addEventListener("mouseout",
    function () {
        menu.style.fontSize = "1.8em";
    }
);

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseover", () => {
        box[i].style.transform = "scale(1.02)";
        box[i].style.transition = "transform 0.3s ease";
    });

    box[i].addEventListener("mouseout", () => {
        box[i].style.transform = "scale(1)";
        box[i].style.transition = "transform 0.3s ease";
    });
};

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const newHeight = initialHeight + scrollY;
    if (newHeight < 500) {
        targetElement.style.height = `${newHeight}px`;
        targetElement.style.transition = "height 0.3s ease";
    }
});
