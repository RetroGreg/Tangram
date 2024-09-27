window.addEventListener('DOMContentLoaded', () => {
    const head = document.querySelector('head');
    
    const figureCSS = document.createElement('link');
    figureCSS.rel = 'stylesheet';
    figureCSS.href = 'figure.css';
    head.appendChild(figureCSS);

    loadCSS('square.css');
    const container = document.querySelector('.container');
    container.classList.add('carre');
});

const container = document.querySelector('.container');

function loadCSS(fileName) {
    const head = document.querySelector('head');
    let link = document.querySelector(`link[href="${fileName}"]`);

    if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fileName;
        head.appendChild(link);
    }
}

function clearClassesAndToggle(className) {
    container.classList.remove('carre', 'chat', 'oie', 'canard', 'coeur', 'tortue', 'boat', 'mystere1', 'mystery2', 'mystere3', 'rabbit', 'goat');
    container.classList.toggle(className);
}

function randomFigure(figures) {
    const randomIndex = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
}

const darkModeButton = document.querySelector('.darkmode');

const nav = document.createElement('nav');
darkModeButton.insertAdjacentElement('afterend', nav);

const buttons = [
    { class: 'figure1', text: 'Carré', css: 'square.css', toggleClass: 'carre' },
    { class: 'figure2', text: 'Chat', css: 'cat.css', toggleClass: 'chat' },
    { class: 'figure3', text: 'Oie', css: 'swan.css', toggleClass: 'oie' },
    { class: 'figure4', text: 'Canard', css: 'duck.css', toggleClass: 'canard' },
    { class: 'figure5', text: 'Coeur', css: 'heart.css', toggleClass: 'coeur' },
    { class: 'figure6', text: 'Tortue', css: 'turtle.css', toggleClass: 'tortue' },
    { class: 'figure7', text: 'Bateau', css: 'boat.css', toggleClass: 'boat' },
    { class: 'figure8', text: 'Mystère 1', css: 'mystery1.css', toggleClass: 'mystere1' },
    { class: 'figure9', text: 'Mystère 2', css: 'mystery2.css', toggleClass: ['mystery2', 'rabbit', 'goat'], random: true },
    { class: 'figure10', text: 'Mystère 3', css: 'mystery3.css', toggleClass: 'mystere3' }
];

buttons.forEach(buttonData => {
    const button = document.createElement('button');
    button.classList.add(buttonData.class);
    button.innerText = buttonData.text;
    nav.appendChild(button);

    button.addEventListener('click', () => {
        loadCSS(buttonData.css);
        if (buttonData.random) {
            const randomClass = randomFigure(buttonData.toggleClass);
            clearClassesAndToggle(randomClass);
        } else {
            clearClassesAndToggle(buttonData.toggleClass);
        }
    });
});

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    container.classList.toggle('darkmode');
    document.querySelector('html').classList.toggle('darkmode');
    document.querySelector('h1').classList.toggle('darkmode');
});

const svgScript = document.createElement('script');
svgScript.src = 'svgInjector.js';
document.body.appendChild(svgScript);

const hintButton = document.createElement('button');
hintButton.classList.add('hint');
hintButton.innerText = 'Indice';

nav.insertAdjacentElement('afterend', hintButton);

const sounds = {
    carre: 'sons/carré.mp3',
    chat: 'sons/miaou.mp3',
    oie: 'sons/cygne.mp3',
    canard: 'sons/canard.mp3',
    coeur: 'sons/coeur.mp3',
    tortue: 'sons/tortue.mp3',
    boat: 'sons/bateau.wav',
    mystere1: 'sons/otarie.mp3',
    mystery2: 'sons/porte.wav',
    rabbit: 'sons/lapin.mp3',
    goat: 'sons/Chevre.mp3',
    mystere3: 'sons/cavalier.mp3'
};

let currentAudio = null;

function playHintSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const activeClass = Object.keys(sounds).find(className => container.classList.contains(className));
    
    if (activeClass) {
        currentAudio = new Audio(sounds[activeClass]);
        currentAudio.play();
    } else {
        console.log("Aucune figure active");
    }
}

hintButton.addEventListener('click', playHintSound);
