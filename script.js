// Typing Effect

let typed = new Typed('.auto-input', {
  strings: ['Front-End Developer!', 'Back-End Developer!', 'Full-Stack Developer!', 'Graphic Designer!'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 2000,
  loop: true,
});

// Add the following JavaScript code to set the color to #31274b (purple)
let typedText = document.querySelector('.auto-input');
typedText.style.color = '#FFA337';

