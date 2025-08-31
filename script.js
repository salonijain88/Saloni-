// Smooth scroll function

function scrollToSection(sectionId) {

  document.getElementById(sectionId).scrollIntoView({

    behavior: "smooth"

  });

}

// Contact form submission (demo only)

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  this.reset();

});