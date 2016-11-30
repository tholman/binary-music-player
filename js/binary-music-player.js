/*!
 * binary-music-player
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

/**
 * Inspired by: 1023.exe (by Alfred Kedhammar) - /w Tone.js
 * -- Original video concept here: https://www.youtube.com/watch?v=CdaPhpGG6As
 * ---- Not quite as cool with the backing violins, but still cool!
 */

var count = 0;
var pad = "0000000000";
var numberArea = document.querySelector(".binary");
var previousBinarySet = pad.split('');

var notes = ["D4", "E4", "F4", "G4", "A5", "C5", "D5", "E5", "F5", "G5"];
var times = [1.7, 1.5, 1.3, 1.1, .9, .7, .5, .5, .5, .5];

function toBinary(number){
    return (number >>> 0).toString(2);
}

function padNumber(numberString) {
  return pad.substring(0, pad.length - numberString.length) + numberString;
}

function play() {  
  var synth = new Tone.PolySynth(16, Tone.SimpleSynth).set({
    "volume" : -8,
    "oscillator" : {
      "type" : "triangle1",
      frequency: 40,
      detune: 0,
      phase: 0
    }, 
    "envelope" : {
      "attack" :  0.025,
      "decay" :  0.25,
      "sustain" :  0.28,
      "release" :  0.2,
    },
  }).toMaster();
    
  Tone.Transport.bpm.value = 50;
    
  Tone.Transport.scheduleRepeat(function(time) {
    
    var number = Math.floor(count);
    count = count + 1;
    var numberString = padNumber(toBinary(number));
    numberArea.innerHTML = numberString;

    var binaryArray = numberString.split('');
    
    for( var i = 0; i < binaryArray.length; i++ ) {
      if( binaryArray[i] === "1" && previousBinarySet[i] !== binaryArray[i]) {
        synth.triggerAttackRelease(notes[i], times[i], time);
      }
    }
    
    previousBinarySet = binaryArray;  
    
    if( count > 1023 ) {
      count = 0;
    }
  }, "32i");
  
  Tone.Transport.start();
}

// play();