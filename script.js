window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.classList.add('carre');
});

const container = document.querySelector('.container');

function clearClassesAndToggle(className) {
    container.classList.remove('carre', 'chat', 'oie', 'canard', 'coeur', 'tortue', 'boat', 'mystere1', 'mystery2', 'mystere3', 'rabbit', 'goat');
    container.classList.toggle(className);
}

function randomFigure(figures) {
    const randomIndex = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
}

const darkModeButton = document.querySelector('.darkmode');
darkModeButton.addEventListener('click', () => {

    document.body.classList.toggle('darkmode');
    document.querySelector('.container').classList.toggle('darkmode');
    document.querySelector('html').classList.toggle('darkmode');
    document.querySelector('.h1').classList.toggle('darkmode');
   document.body.classList.toggle('darkmode');


});

// Le carré
const button = document.querySelector('.figure1');
button.addEventListener('click', () => {
    clearClassesAndToggle('carre');
});

// Le chat miaou
const button2 = document.querySelector('.figure2');
button2.addEventListener('click', () => {
    clearClassesAndToggle('chat');
});

// L'oie
const button3 = document.querySelector('.figure3');
button3.addEventListener('click', () => {
    clearClassesAndToggle('oie');
});

// Le canard (L'oie verte)
const button4 = document.querySelector('.figure4');
button4.addEventListener('click', () => {
    clearClassesAndToggle('canard');
});

// Le coeur
const button5 = document.querySelector('.figure5');
button5.addEventListener('click', () => {
    clearClassesAndToggle('coeur');
});

// La tortue
const button6 = document.querySelector('.figure6');
button6.addEventListener('click', () => {
    clearClassesAndToggle('tortue');
});

// Le bateau
const button7 = document.querySelector('.figure7');
button7.addEventListener('click', () => {
    clearClassesAndToggle('boat');
});

// Le mystère 1
const button8 = document.querySelector('.figure8');
button8.addEventListener('click', () => {
    clearClassesAndToggle('mystere1');
});

// Le mystère 2 (aléatoire entre mystery2, rabbit, goat)
const button9 = document.querySelector('.figure9');
button9.addEventListener('click', () => {
    const figures = ['mystery2', 'rabbit', 'goat'];
    const randomClass = randomFigure(figures);
    clearClassesAndToggle(randomClass);
});

// Le mystère 3
const button10 = document.querySelector('.figure10');
button10.addEventListener('click', () => {
    clearClassesAndToggle('mystere3');
});
