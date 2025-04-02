document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.8) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  });
  
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  <img src="shubhra1130 - Copy.jpg" alt="Manish Pandey's Profile Picture" style="width:
250px; height: 250px; border: 5px solid rgb(255, 0, 0); border-radius: 50%; box-shadow: 5px 5px 10px rgb(255, 0, 0);"></img>