const greetingText = document.getElementById('greetingText');
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');

const redBox = document.getElementById('redBox');
const blueBox = document.getElementById('blueBox');
const greenBox = document.getElementById('greenBox');
const yellowBox = document.getElementById('yellowBox');

redBox.addEventListener('click', function () {
  if (redBox.classList.contains('fill')) {
    redBox.classList.remove('fill');
  } else {
    redBox.classList.add('fill');
  }
});

blueBox.addEventListener('click', function () {
  if (blueBox.classList.contains('fill')) {
    blueBox.classList.remove('fill');
  } else {
    blueBox.classList.add('fill');
  }
});

greenBox.addEventListener('click', function () {
  if (greenBox.classList.contains('fill')) {
    greenBox.classList.remove('fill');
  } else {
    greenBox.classList.add('fill');
  }
});

yellowBox.addEventListener('click', function () {
  if (yellowBox.classList.contains('yellow-fill')) {
    yellowBox.classList.remove('yellow-fill');
  } else {
    yellowBox.classList.add('yellow-fill');
  }
});

greetButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name === '') {
    greetingText.textContent = 'Hello';
  } else {
    greetingText.textContent = 'Hello ' + name;
  }
});
