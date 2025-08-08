document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id$="-content"], section[id="bio"]');
  
  // Debounce function for better performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle scroll events
  const handleScroll = debounce(function() {
    // Add floating effect
    if (window.scrollY > 100) {
      nav.classList.add('floating');
    } else {
      nav.classList.remove('floating');
    }
    
    // Find the current section
    let currentSection = '';
    const scrollPosition = window.scrollY + nav.offsetHeight + 50;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.id.replace('-content', '');
        currentSection = sectionId;
      }
    });

    // Update active state of nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkSection = link.getAttribute('href').slice(1);
      if (linkSection === currentSection) {
        link.classList.add('active');
      }
    });
  }, 100);

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Smooth scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId + (targetId === '#bio' ? '' : '-content'));
      const navHeight = nav.offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Back to top button functionality
  const backToTop = document.createElement('a');
  backToTop.href = '#';
  backToTop.className = 'back-to-top';
  backToTop.id = 'backToTop';
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTop);

  // Show/hide back to top button
  const handleBackToTop = debounce(function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, 100);

  window.addEventListener('scroll', handleBackToTop);

  // Smooth scroll to top
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
