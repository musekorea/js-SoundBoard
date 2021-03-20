const sounds = [`sound1`, `sound2`, `sound3`, `sound4`, `sound5`, `sound6`];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSounds();

    document.getElementById(sound).play();
  });
  document.querySelector('#buttons').appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
