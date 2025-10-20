// Get all FAQ items
  const faqItems = document.querySelectorAll('.FAQ-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle the "active" class on the clicked item
      item.classList.toggle('active');
    });
  });

//