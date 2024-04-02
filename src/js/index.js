
const main = document.querySelector('.main');
const mainButton = document.getElementById("main");
const aboutMe = document.querySelector('.aboutMe');
const aboutMeButton = document.getElementById("aboutMe");
const skills = document.querySelector('.skills');
const skillsButton = document.getElementById("skills");
const portfolio = document.querySelector('.portfolio');
const portfolioButton = document.getElementById("portfolio");
const footer = document.querySelector('.footer');
const footerButton = document.getElementById("footer");
const ageBlock = document.getElementById('age')
const mainAboutMeIcon = document.querySelector(".mainAboutMeIcon");
let mainImageElement = document.createElement("img");

function handleScrollButtonClick(block, positionScroll = "center") {
    if (block) {
        block.scrollIntoView({ block: positionScroll, behavior: "smooth" });
    }
}

mainButton.addEventListener("click", function () {
    handleScrollButtonClick(main)
}, false);
aboutMeButton.addEventListener("click", function () {
    handleScrollButtonClick(aboutMe)
}, false);
skillsButton.addEventListener("click", function () {
    handleScrollButtonClick(skills)
}, false);
portfolioButton.addEventListener("click", function () {
    handleScrollButtonClick(portfolio, "start")
}, false);
footerButton.addEventListener("click", function () {
    handleScrollButtonClick(footer)
}, false);

const getAge = () => {
    const now = new Date();
    const birth = new Date(1998, 7, 26);
    const age = `Frontend Разработчик <br> ${Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 365))} лет, Киров`
    if (age && ageBlock) { ageBlock.innerHTML = age }
}

let iconBox = document.querySelector(".mainAboutMeIcon");
let checkTheme = "";

const getIcon = (theme) => {
    if (mainImageElement && mainAboutMeIcon && theme) {
        theme === "dark" ?
            (mainImageElement.src = "./src/img/darkMode.png")
            :
            (mainImageElement.src = "./src/img/lightMode.png")
        mainAboutMeIcon.appendChild(mainImageElement)
    }
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    checkTheme = "dark";
    getIcon("dark")
} else {
    document.documentElement.setAttribute("data-theme", "light");
    checkTheme = "light";
    getIcon("light")
}

iconBox.addEventListener("click", () => {
    checkTheme === "light" ?
        (document.documentElement.setAttribute("data-theme", "dark"),
            checkTheme = "dark",
            getIcon("dark"))
        :
        (document.documentElement.setAttribute("data-theme", "light"),
            checkTheme = "light",
            getIcon("light"))
}
);

window.onload = getAge;