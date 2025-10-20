// Get all FAQ items
  const faqItems = document.querySelectorAll('.FAQ-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle the "active" class on the clicked item
      item.classList.toggle('active');
    });
  });

//Get all Get In Touch buttons
  const getInTouchButtons = document.querySelectorAll('.get-in-touch-btn');

  getInTouchButtons.forEach(button => {
    button.addEventListener('click', () => {

        //Smooth scroll to the get in touch section
        const targetSection = document.querySelector('#get-in-touch-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    })
  })