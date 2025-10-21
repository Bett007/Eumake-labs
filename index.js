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
        //Smooth scroll to the get-in-touch section
        const targetSection = document.querySelector('#get-in-touch-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    })
  })

  const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    const callBack = form.querySelector('input[type="checkbox"]').checked;

    if (!fullName || !email || !phone || !message) {
      alert('Please fill all required fields');
      return;
    }

    const data = {
      fullName,
      email,
      phone,
      message,
      callBack,
      createdAt: new Date().toISOString()
    };

// Posting to 'requests'

  fetch('https://68f63e876b852b1d6f169a67.mockapi.io/api/v1/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(() => {
        alert('Message sent successfully!');
        form.reset(); // clear form
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Failed to send. Try again later.');
      });
  });
}