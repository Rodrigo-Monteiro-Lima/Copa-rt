const showConfetti = (el) => {
  party.confetti(el);
};

const playEffect = (name) => {
  const effect = new Audio(`/assets/audio/${name}.mp3`);
  effect.playbackRate = 1.5;
  effect.play();
};

const showEmoju = (name) => {
  const emoji = document.querySelector(`#emoji-${name}`);
  emoji.classList.add('show');

  setInterval(() => {
    emoji.classList.remove('show');
  }, 5000);
};

export const updateScore = (match, br, other) => {
  const newScore = `${br} x ${other}`;
  const scoreEl = document.querySelector(`#${match}`);
  scoreEl.innerText = newScore;

  if (br > 0) {
    showConfetti(scoreEl);
    playEffect('gol');
    showEmoju('gol');
  }
};
