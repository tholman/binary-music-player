/**
 * Binary Music Player UI
 * - Handles user inputs, mostly
 */

(function() {
  
  // DOM
  var customizeButton, customizeArea, inputAreas, keys;

  // VARS
  var currentFocusedInput = 0;

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
    currentFocusedInput = 0;
  }

  function onKeyClicked() {
    currentFocusedInput = currentFocusedInput + 1;
    if( currentFocusedInput >= inputAreas.length ) {
      currentFocusedInput = 0;
    }
    inputAreas[currentFocusedInput].focus();
  }

  cacheDOM();
  bindUI();
})();