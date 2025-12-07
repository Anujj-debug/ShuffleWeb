# Shuffle - Launching Soon Page

A clean, responsive landing page announcing the upcoming launch of Shuffle. Built with React and Vite.

## Features

- 🎨 Modern, minimalist design with gradient text effects
- 📱 Fully responsive across all devices (mobile, tablet, desktop)
- ♿ Accessible with WCAG AA compliance
- 🎭 Respects user's reduced motion preferences
- 🔗 Social media links (Instagram, X/Twitter, GitHub)
- ⚡ Fast loading with optimized assets
- 🧪 Comprehensive test coverage (unit + property-based tests)

## Project Structure

```
src/
├── components/
│   ├── TopLogo.jsx       # Logo and company name
│   ├── Hero.jsx          # "Launching Soon" message
│   └── SocialLinks.jsx   # Social media icons
├── lib/
│   └── reducedMotion.js  # Motion preference utilities
├── test/
│   └── setup.js          # Test configuration
├── App.jsx               # Main application
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Add your logo:**
   - Place your Shuffle logo in `public/shuffle-logo.png`
   - Recommended: 300x300px, PNG or WebP, under 50KB

3. **Configure social media links:**
   - Copy `.env.example` to `.env`
   - Update the URLs with your actual social media profiles:
     ```
     VITE_INSTAGRAM_URL=https://instagram.com/your-handle
     VITE_X_URL=https://x.com/your-handle
     VITE_GITHUB_URL=https://github.com/your-org
     ```

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests once
npm run test:run

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

The project includes comprehensive testing:

- **Unit Tests**: Test individual components and functionality
- **Property-Based Tests**: Verify universal properties across many inputs

Run tests with:

```bash
npm test
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-background: #000000;
  --color-text-primary: #ffffff;
  --color-accent: #5eead4;
  --color-accent-dark: #2dd4bf;
}
```

### Typography

Adjust font sizes in `src/index.css`:

```css
:root {
  --font-size-hero: clamp(2.5rem, 8vw, 6rem);
  --font-size-company: clamp(1.5rem, 4vw, 2.5rem);
}
```

### Message

Change the hero message in `src/App.jsx`:

```jsx
<Hero message="Coming Soon" />
```

## Deployment

The site is optimized for static hosting on:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the production version:

```bash
npm run build
```

The `dist/` folder will contain your optimized static files.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

- Semantic HTML structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Respects reduced motion preferences

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
