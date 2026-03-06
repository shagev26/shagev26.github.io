// =========================================================
// Auteur : Gevorg Shahbazyan
// Cours : ICS3U
// Fichier : main.js
// Description : JavaScript pour effets visuels
// =========================================================


// ---------------------------------------------------------
// 1. FADE-IN : chaque .boite apparaît progressivement
// Source: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
// ---------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.boite, .note').forEach(box => {
  box.classList.add('fade-box');
  observer.observe(box);
});


// ---------------------------------------------------------
// 2. TYPING ANIMATION : le h1 se tape lettre par lettre
// Source: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// ---------------------------------------------------------
const h1 = document.querySelector('h1');
if (h1) {
  const texte = h1.textContent;
  h1.textContent = '';
  let i = 0;
  function taper() {
    if (i < texte.length) {
      h1.textContent += texte.charAt(i);
      i++;
      setTimeout(taper, 45);
    }
  }
  taper();
}


// ---------------------------------------------------------
// 3. BOUTON RETOUR EN HAUT : apparaît après 300px de défilement
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// ---------------------------------------------------------
const btnHaut = document.createElement('button');
btnHaut.textContent = '↑';
btnHaut.id = 'btn-haut';
document.body.appendChild(btnHaut);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnHaut.style.opacity = '1';
    btnHaut.style.pointerEvents = 'auto';
  } else {
    btnHaut.style.opacity = '0';
    btnHaut.style.pointerEvents = 'none';
  }
});

btnHaut.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
