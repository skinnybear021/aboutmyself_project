window.addEventListener('load', () => {
  const welcomeScreen = document.getElementById('welcome-screen');

  setTimeout(() => {
    welcomeScreen.classList.add('fade-out');
  }, 2000); // 2 seconds delay

  setTimeout(() => {
    welcomeScreen.style.display = 'none';
  }, 3500); // 2s + 1.5s = 3.5s total


  const showRandomNoteBtn = document.getElementById('show-random-note-btn');
  const noteDisplay = document.getElementById('note-display');

  const notes = [
    `      <p>"Mundane penance in exhaustion to merit worthiness while feeling undeserving. Without morale."</p>

      <p>(Beat.)</p>

      <p>"That\'s all.</p>`,
    `      <p>"Expression as compulsion. The futile broadcast of the insignificant. Personal or digital makes no difference—both are just screaming into voids, hoping for echo. Not needed, never needed, yet performed anyway. Mundane self-flagellation masquerading as authenticity. Exhausting oneself to earn acknowledgment from the equally exhausted. Undeserving of audience. Without morale. The performance never stops."</p>`,
    `      <p>ignorance can sometimes be still bliss</p>`,
    `      <p>always reason with life. without passion. without anything.</p>`,
    `      <p>to bear.</p>`,
    `      <p>to be noticed.</p>`
  ];

  showRandomNoteBtn.addEventListener('click', () => {
    if (notes.length > 0) {
      const randomIndex = Math.floor(Math.random() * notes.length);
      noteDisplay.innerHTML = notes[randomIndex];
    }
  });
});
