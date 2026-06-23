const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const ctaButton = document.getElementById('ctaButton');
const statusMessage = document.getElementById('statusMessage');

if (ctaButton && statusMessage) {
  ctaButton.addEventListener('click', () => {
    statusMessage.textContent = 'Welcome to The Digital Hub!';
  });
}
