# Eumake-labs Website (Bootcamp Project)

This project is a **medical laboratory website** developed as part of my web development bootcamp.  
It provides users with an overview of the lab’s services, allows them to contact the lab through a functional form, and includes an FAQ section for quick answers to common questions.

---

## 🚀 Project Overview

The goal of this project is to simulate a **functional web interface for a diagnostic lab**.  
Users should be able to:
- View the types of lab tests offered (routine, home sample collection, and specialized).
- Add selected tests to a test tray before submitting a booking request.
- Send direct inquiries via a contact form.
- Access a Frequently Asked Questions (FAQs) section.

While some features are still under development, the project demonstrates solid front-end foundations, API integration using MockAPI, and form submission functionality.

---

## 🧩 Features Implemented

### ✅ Core Features
- **Home & About Sections** – Overview of the lab and its purpose.  
- **Contact Form** – Users can send messages or request a callback.  
  - Data is submitted to a [MockAPI](https://mockapi.io/) endpoint (`/requests`).
  - Includes simple validation and user feedback (success or failure message).
- **FAQ Section** – Displays common questions users might have.  
  - Click behavior for toggling questions has been implemented.

### ⚙️ Technical Highlights
- HTML5, CSS3, and vanilla JavaScript (no frameworks).  
- API integration using `fetch()` to interact with MockAPI endpoints.  
- Organized code structure for easy future updates.  
- Use of semantic HTML and simple, clean styling.

---

## 🧠 Areas of Ongoing Improvement

These are features and enhancements planned for future iterations:

### 🧾 Test Browsing & Booking (In Progress)
- Display all available lab tests pulled from the `/tests` endpoint.
- Allow users to add tests to a tray and submit their requests through `/requests`.
- Show pricing, turnaround time, and whether home collection is supported.

### 📱 Responsiveness
- Improve responsiveness for tablets and mobile devices.  
- Adjust typography, layout grids, and button scaling for smaller screens.

### ❓ FAQ Answers
- Add full FAQ answer toggle functionality (currently incomplete).
- Include real, editable answers fetched dynamically or written into HTML.

### 🎨 UI Polish
- Better visual hierarchy and hover interactions.
- Possibly introduce icons or light animations.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5 / CSS3** | Structure and styling |
| **JavaScript (ES6)** | Client-side logic and interactivity |
| **MockAPI.io** | Backend simulation for form submissions and test data |
| **GitHub Pages** | Project hosting and deployment |

---

## 📦 API Endpoints Used

- **Tests** → `https://68f63e876b852b1d6f169a67.mockapi.io/api/v1/tests`  
- **Requests** → `https://68f63e876b852b1d6f169a67.mockapi.io/api/v1/requests`

---

