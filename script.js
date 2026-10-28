// Barre de navigation : ajoute une bordure dès qu'on fait défiler la page.
const nav = document.querySelector(".nav");
const surDefilement = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
surDefilement();
window.addEventListener("scroll", surDefilement, { passive: true });

// Apparition progressive des blocs quand ils entrent à l'écran.
const blocs = document.querySelectorAll(".card, .persona__item, .faq details, .shot");
blocs.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add("is-visible");
        observateur.unobserve(entree.target);
      }
    });
  }, { threshold: 0.15 });
  blocs.forEach((el) => observateur.observe(el));
} else {
  blocs.forEach((el) => el.classList.add("is-visible"));
}

// Année du pied de page.
document.getElementById("year").textContent = new Date().getFullYear();
