const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const ctaButton = document.getElementById('ctaButton');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('Welcome to The Digital Hub!');
  });
}
