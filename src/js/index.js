
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


function handleScrollButtonClick(block, blockScroll = "center") {
    if (block){
        block.scrollIntoView({ block: blockScroll, behavior: "smooth" });
    }
}

mainButton.addEventListener("click",  function(){
    handleScrollButtonClick(main)}, false);
aboutMeButton.addEventListener("click",  function(){
    handleScrollButtonClick(aboutMe)}, false);
skillsButton.addEventListener("click",  function(){
    handleScrollButtonClick(skills)}, false);
portfolioButton.addEventListener("click",  function(){
    handleScrollButtonClick(portfolio, "start")}, false);
footerButton.addEventListener("click",  function(){
    handleScrollButtonClick(footer)}, false);

const getAge = () =>{
    const now = new Date().valueOf();
    const birth = new Date(1998, 7, 26).valueOf();
    const age = `Frontend Разработчик <br> ${Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 365))} лет, Киров`
    if (age && ageBlock) {ageBlock.innerHTML = age}
}
window.onload = getAge;