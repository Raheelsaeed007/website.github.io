/*scroll reveal*/
ScrollReveal({
     reset: true,
     distance:'80px',
     duration: 2000,
     delay: 200
});
ScrollReveal().reveal('.index-content, .heading', {origin:'top'});
ScrollReveal().reveal('.index-img, .courses-container, .projects-box, .contact-form', {origin:'bottom'});
ScrollReveal().reveal('.index-content h1, .about-img', {origin:'left'});