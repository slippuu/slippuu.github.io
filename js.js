// Function to make navigation links smooth scroll
const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    });
  });
};

// Select navigation links by their IDs
const navLinks = {
  welcome: document.querySelector('#welcomeNav'),
  about: document.querySelector('#aboutNav'),
  portfolio: document.querySelector('#portfolioNav'),
  contact: document.querySelector('#contactNav'),
};

// Observer options for intersection observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

// Callback function for the observer
const observerCallback = (entries) => {
  entries.forEach(entry => {
    const navLink = navLinks[entry.target.id];
    if (entry.isIntersecting) {
      navLink.classList.add('active');
      // Remove 'active' class from other nav links
      Object.values(navLinks).forEach(item => {
        if (item !== navLink) item.classList.remove('active');
      });
    }
  });
};

// Create an IntersectionObserver and observe each section
const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Initialize smooth scrolling for navigation links
makeNavLinksSmooth();
