# Clear Portfolio

A minimal portfolio crafted with focus and clarity.

## Overview

- Hero header with name, role, location, and social icons
- About, What I Do, Core Skills, Currently Building, Previous Work, Highlights, Education, Achievements, Philosophy, and signature
- Font Awesome icons with clean external-link indicators
- Responsive layout with a circular, grayscale profile image (hidden on small screens)
- Reduced-motion friendly staggered fade-in on load

## Tech stack

- HTML5 + CSS3 + Vanilla JS
- Fonts: Geist (body), Mrs Saint Delafield (signature) via Google Fonts
- Icons: Font Awesome via CDN

## Project structure

```
.
├── index.html      # Main page markup
├── style.css       # Styles (layout, typography, animations, responsive)
├── script.js       # Staggered reveal and small utilities
└── profile.png # Circular profile image used in the hero
```

## How to use

- Open `index.html` in your browser to view the site.
- No build step or server required. Any static server or editor preview also works if you prefer.

## Customization

- Profile image: replace `profile.png` (keep similar dimensions for best results)
- Social links: edit the anchors inside the `.socials` block in `index.html`
- “CodeHype” link: in the About section, the brand link uses a Font Awesome external-link icon
- Currently Building heading: the H3 includes an external-link icon pointing to `https://www.codehype.in`
- Achievements link: the external-link icon currently uses `href="#"` — update it with the correct URL
- Typography: fonts loaded in `<head>` (Geist + Mrs Saint Delafield); body/signature families set in `style.css`
- Animations: fade-in-up classes and sequencing in `script.js`; respects `prefers-reduced-motion`
- Colors, sizes, tiles: edit in `style.css` (skills tiles, socials hover, signature line, etc.)

## Accessibility notes

- Social icons have `aria-label`s
- External links use `rel="noopener"` when opening in new tabs
- Motion reduced automatically when users prefer reduced motion

## Performance notes

- Minimal external dependencies (Google Fonts, Font Awesome CDN)
- Consider locally hosting fonts/icons if you need stricter CSP or offline support
