//Get all Get In Touch buttons
const getInTouchButtons = document.querySelectorAll(".get-in-touch-btn");

getInTouchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Smooth scroll to the get-in-touch section
    const targetSection = document.querySelector("#get-in-touch-section");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector("textarea").value.trim();
    const callBack = form.querySelector('input[type="checkbox"]').checked;

    if (!fullName || !email || !phone || !message) {
      alert("Please fill all required fields");
      return;
    }

    const data = {
      fullName,
      email,
      phone,
      message,
      callBack,
      createdAt: new Date().toISOString(),
    };

    // Posting to 'requests'

    fetch("https://68f63e876b852b1d6f169a67.mockapi.io/api/v1/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(() => {
        alert("Message sent successfully!");
        form.reset(); // clear form
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to send. Try again later.");
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // ===== FAQ show/hide answers (simple student-style) =====
  (function () {
    const faqItems = document.querySelectorAll(".FAQ-item");
    if (!faqItems || faqItems.length === 0) return;

    // answers in same order as the FAQ items in the DOM
    const answers = [
      "We offer a wide range of lab tests including routine bloods, biochemistry, hormones, infectious disease screens and specialised panels.",
      "Yes — we accept several insurance providers. Please call or check with reception for the full list and how billing is handled.",
      "Not always. Some tests need a doctor's referral. Routine checks usually don't, but specialised tests may require one.",
    ];

    // adds a tiny style so answers and hr look ok
    const style = document.createElement("style");
    style.textContent = `
    .faq-sep { border: 2pt; height: 1px; background: #eee; margin: 8px 0; }
    .faq-answer { padding: 6px 0 10px; color: #333; font-size: 0.95rem; }
    .FAQ-item.active { background: rgba(255,255,255,0.5); }
  `;
    document.head.appendChild(style);

    faqItems.forEach((item, idx) => {
      // avoids attaching twice if this script runs again
      if (item.dataset.faqInit) return;
      item.dataset.faqInit = "true";

      item.addEventListener("click", () => {
        // toggles active class
        const open = item.classList.toggle("active");

        // removes existing injected nodes (if any) first
        const existingHr = item.querySelector(".faq-sep");
        const existingAns = item.querySelector(".faq-answer");
        if (existingHr) existingHr.remove();
        if (existingAns) existingAns.remove();

        if (open) {
          // create hr and answer nodes
          const hr = document.createElement("hr");
          hr.className = "faq-sep";

          const ans = document.createElement("p");
          ans.className = "faq-answer";
          ans.textContent = answers[idx] || "Answer coming soon.";

          // insert after the <p> question if present, otherwise append
          const p = item.querySelector("p");
          if (p && p.nextSibling) {
            item.insertBefore(hr, p.nextSibling);
            item.insertBefore(ans, hr.nextSibling);
          } else {
            item.appendChild(hr);
            item.appendChild(ans);
          }
        } else {
          // closed — nothing else to do, nodes already removed above
        }
      });
    });
  })();
});
