"use strict"

let keyboardButtons = [];
let audioFiles = [];

function loadKeyboardButtons () {
    keyboardButtons = Array.from(document.querySelectorAll('.keyboard button'));
};

function loadAudioFiles () {
    audioFiles = document.querySelectorAll('audio');
};

function matchAudioButton () {
    keyboardButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            audioFiles[index].play();
        })
    });
};

loadKeyboardButtons();
loadAudioFiles();
matchAudioButton();
