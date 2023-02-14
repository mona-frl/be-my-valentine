const mainPage = document.querySelector(".main-display");
const saidYesPage = document.querySelector(".saidYes");
const saidNoPage = document.querySelector(".saidNo");
const yourPlacePage = document.querySelector(".yourPlace");
const myPlacePage = document.querySelector(".myPlace");
const didntChangeMindPage = document.querySelector(".didntChangeMind");
const changedMindPage = document.querySelector(".changedMind");

const sad = new Audio('./sounds/sad.mp3')
const rick = new Audio('./sounds/rickroll.mp3');
const happy = new Audio('./sounds/happy.wav');
const clap = new Audio('./sounds/clapping.wav');

function saidYes() {
    happy.play();
    mainPage.classList.add("hidden");
    saidYesPage.classList.remove("hidden");
    saidNoPage.classList.add("hidden");
        didntChangeMindPage.classList.add("hidden");

}

function saidNo() {
    sad.play();
    mainPage.classList.add("hidden");
    saidNoPage.classList.remove("hidden");
    saidYesPage.classList.add("hidden");
}

function yourPlace() {
    clap.play();
    saidYesPage.classList.add("hidden");
    yourPlacePage.classList.remove("hidden");
}

function myPlace() {
    clap.play();
    saidYesPage.classList.add("hidden");
    myPlacePage.classList.remove("hidden")
}

function didntChangeMind() {
    mainPage.classList.add("hidden");
    saidYesPage.classList.add("hidden");
    saidNoPage.classList.add("hidden");
    yourPlacePage.classList.add("hidden");
    myPlacePage.classList.add("hidden");
    didntChangeMindPage.classList.remove("hidden");
}

function didntChangeMind2() {
    rick.play();
    mainPage.classList.remove("hidden");
    saidYesPage.classList.add("hidden");
    saidNoPage.classList.add("hidden");
    yourPlacePage.classList.add("hidden");
    myPlacePage.classList.add("hidden");
    didntChangeMindPage.classList.add("hidden");
}
