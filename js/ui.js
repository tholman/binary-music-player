/**
 * Binary Music Player UI
 * - Handles user inputs, mostly
 */

// DOM
var customizeButton, customizeArea, inputAreas, keys;

// VARS
var isFocused = 0;


function cacheDOM() {
  customizeButton = document.querySelector('.info');
  customizeArea = document.querySelector('.editor-container');
  inputAreas = document.querySelectorAll('.notes input');
  keys = document.querySelectorAll('.piano-key');
}

function bindUI() {
  
  customizeButton.addEventListener('click', onCustomizeButtonClicked, false);
  
  for( var i = 0; i < keys.length; i++ ) {
    keys[i].addEventListener('click', onKeyClicked, false);
  }
}

function onCustomizeButtonClicked() {

  customizeArea.classList.toggle('open');
  inputAreas[0].focus();
  isFocused = 0;

}

function onKeyClicked() {

  isFocused = isFocused + 1;
  if( isFocused >= inputAreas.length ) {
    isFocused = 0;
  }
  
  inputAreas[isFocused].focus();
}

cacheDOM();
bindUI();