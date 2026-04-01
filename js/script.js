const greetingText = document.getElementById('greetingText');
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const colorBoxes = document.querySelectorAll('.color-box');

const colorMap = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#008000',
  yellow: '#ffff00',
};

colorBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    const colorName = box.dataset.color;
    const isFilled = box.classList.contains('is-filled');

    if (isFilled) {
      box.style.backgroundColor = '';
      box.classList.remove('is-filled', 'is-yellow');
      return;
    }

    box.style.backgroundColor = colorMap[colorName];
    box.classList.add('is-filled');

    if (colorName === 'yellow') {
      box.classList.add('is-yellow');
    }
  });
});

greetButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  greetingText.textContent = name ? `Hello ${name}` : 'Hello';
});
