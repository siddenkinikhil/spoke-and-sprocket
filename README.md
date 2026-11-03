# Spoke & Sprocket: Landing Page

A responsive landing page for a fictional bike repair workshop, built with plain HTML, CSS and JavaScript (no frameworks, no build step). This is my Week 1 assignment.



## Features

- Sticky navbar with working links that scroll smoothly to each section
- Active link highlights as you scroll
- Hamburger menu on small screens
- Hero section with heading, description and a "Book a repair" call-to-action button
- About us, Services and Contact sections
- Hero card that tells you if the shop is open right now (based on your clock)
- Contact form with validation and a success message
- Responsive layout (tested at 1366px desktop and 390px mobile)
- Keyboard focus styles and reduced-motion support

## Project structure

```
spoke-and-sprocket/
├── index.html      # page structure and content
├── style.css       # all styling and media queries
├── script.js       # menu, scroll highlight, open status, form validation
├── screenshots/    # website screenshots
└── README.md
```

## How to run it

You do not need to install anything.

**Option 1: open the file**
1. Download or clone the repository.
2. Double-click `index.html`. It opens in your browser.

**Option 2: local server (optional)**
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

Or, if you have Python installed, run this in the project folder and visit http://localhost:8000:

```bash
python -m http.server 8000
```

Note: the fonts (Bricolage Grotesque and Work Sans) load from Google Fonts, so you need an internet connection to see them. Without it the page falls back to your system font and still works.



## Notes

- The business, phone number and email are made up.
- The contact form has no backend. It validates the input and shows a confirmation message only.

## Tech used

HTML5, CSS3 (Grid, Flexbox, CSS variables, media queries), vanilla JavaScript.
