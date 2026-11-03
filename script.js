// ----- Elements -----
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");
const sections = document.querySelectorAll("main section");

// ----- Mobile menu -----
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
}

menuBtn.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// close the menu after a link is tapped
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));

// ----- Navbar shadow + active link while scrolling -----
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);

  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
window.dispatchEvent(new Event("scroll"));

// ----- "Open now" message in the hero card -----
function updateOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  let open = false;

  if (day >= 1 && day <= 5) open = hour >= 9 && hour < 19;
  if (day === 6) open = hour >= 10 && hour < 17;

  const status = document.getElementById("openStatus");
  status.textContent = open ? "We are open right now" : "We are closed right now";
  status.classList.add(open ? "is-open" : "is-closed");
}
updateOpenStatus();

// ----- Contact form validation -----
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

function showError(id, message) {
  document.getElementById(id).classList.toggle("invalid", Boolean(message));
  document.getElementById(id + "Error").textContent = message;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let valid = true;

  if (name.length < 2) {
    showError("name", "Please enter your name.");
    valid = false;
  } else showError("name", "");

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Please enter a valid email, like you@example.com.");
    valid = false;
  } else showError("email", "");

  if (message.length < 10) {
    showError("message", "Please describe the problem in at least 10 characters.");
    valid = false;
  } else showError("message", "");

  if (valid) {
    // No backend in this project, so we just show a confirmation
    success.textContent = "Thanks " + name + ", your request is sent. We will reply within one working day.";
    form.reset();
  }
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();
