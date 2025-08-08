// Analytics Event Tracking Functions
function trackDownload(fileName) {
  gtag('event', 'download', {
    'event_category': 'File',
    'event_label': fileName
  });
}

function trackExternalLink(url) {
  gtag('event', 'click', {
    'event_category': 'External Link',
    'event_label': url
  });
}

function trackNavigation(section) {
  gtag('event', 'navigation', {
    'event_category': 'Internal Navigation',
    'event_label': section
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navLinksContainer.classList.toggle('is-active');
    this.setAttribute('aria-expanded', this.classList.contains('is-active'));
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && navLinksContainer.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
      navLinksContainer.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  const sections = document.querySelectorAll('section[id], h2[id]');
  
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
        currentSection = section.id;
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

  // Smooth scroll to sections and handle mobile menu
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get target section
      const targetId = this.getAttribute('href');
      const sectionName = targetId.replace('#', '');
      trackNavigation(sectionName);
      // Find the target element - try section first, then any element with the ID
      const sectionId = targetId.replace('#', '');
      let targetElement = document.querySelector(`section[id="${sectionId}"]`);
      if (!targetElement) {
        targetElement = document.querySelector(targetId);
      }
      
      // Close mobile menu if on mobile
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('is-active');
        navLinksContainer.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      
      // Calculate scroll position and scroll
      const navHeight = nav.offsetHeight;
      if (!targetElement) {
        console.error('Target section not found:', targetId);
        return;
      }
      const targetPosition = targetElement.offsetTop - navHeight;
      
      // Add a small delay to ensure mobile menu is closed before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 50);
    });
  });

  // Track file downloads and external links
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Track file downloads
    if (href.match(/\.(pdf|jpg|jpeg|png|doc|docx)$/i)) {
      link.addEventListener('click', function() {
        const fileName = href.split('/').pop();
        trackDownload(fileName);
      });
    }
    // Track external links
    else if (href.startsWith('http') || href.startsWith('https')) {
      link.addEventListener('click', function() {
        trackExternalLink(href);
      });
    }
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
