// to know current status of player
var playing=false;
// to store audio class instance
var audio;
// to know which button was clicked (previous and next)
var clicked = false;
// to store music list
var musics=['music1.mp3', 'music2.mp3','music3.mp3','music4.mp3'];
//to store current music playing index
var currentMusicIndex = 0;

// by default music name should be first music
document.getElementById('music-name').innerHTML = musics[currentMusicIndex];
// by default when first music is played, prevoius button should be disabled
document.getElementById('previous').disabled = true;

function playMusic() {
  // if manually clicked Stop button
  if (
    clicked === null &&
    document.getElementById("player").innerHTML.includes("pause")
  ) {
    stopMusic();
    return;
  }

  // enable previous and next button
  document.getElementById("previous").disabled = false;
  document.getElementById("next").disabled = false;

  // disable previous button if playing first music
  if (currentMusicIndex === 0)
    document.getElementById("previous").disabled = true;

  // disable next button if playing last music
  if (currentMusicIndex === musics.length - 1)
    document.getElementById("next").disabled = true;

  // stop music when playing next music by default to play new music
  if (playing) stopMusic();

  //play music
  if (clicked === "previous" || clicked === "next" || clicked === false)
    audio = new Audio(musics[currentMusicIndex]);
  audio.play();

  // reset clicked
  clicked = null;

  // update variable
  playing = true;

  // change button text
  document.getElementById("player").innerHTML =
    '<i class="fa-solid fa-pause"></i>';

  // update to curent playing music name
  document.getElementById("music-name").innerHTML = musics[currentMusicIndex];
}

function stopMusic() {
  playing = false;
  audio.pause();
  // audio.currentTime = 0;
  document.getElementById("player").innerHTML =
    '<i class="fa-solid fa-play"></i>';
}

function handlePrevious() {
  // decrement music index
  currentMusicIndex--;

  // clicked button name
  clicked = "previous";

  // play previous music
  playMusic();
}

function handleNext(){
    // increment music index
    currentMusicIndex++;

    // clicked next button
    clicked = 'next';

    // play next music
    playMusic();
}

