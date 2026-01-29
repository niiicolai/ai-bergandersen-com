# AI Frontpage

A modern single page application built with Vite and React to showcase projects developed with AI agents.

## Features

- 🚀 Built with Vite for fast development and optimized builds
- ⚛️ React 19 with modern hooks and patterns
- 📱 Responsive design for all devices
- 🎨 Modern UI with gradient styling
- 📄 GitHub Pages deployment ready
- 🎯 Single page layout with all projects displayed on root

## Project Structure

```
ai-frontpage/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ProjectGrid.jsx
│   │   └── ProjectGrid.css
│   ├── data/
│   │   └── projects.json
│   ├── App.jsx
│   └── App.css
├── public/
├── package.json
└── vite.config.js
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Adding New Projects

To add new AI projects to showcase:

1. Open `src/data/projects.json`
2. Add a new project object with the following structure:
   ```json
   {
     "id": 4,
     "title": "Your AI Project",
     "description": "Brief description",
     "image": "image-url",
     "technologies": ["React", "AI", "Other"],
     "demoUrl": "https://demo-url.com"
   }
   ```

## GitHub Pages Configuration

The project is pre-configured for GitHub Pages deployment:

- Base URL is set to `/ai-frontpage/` in `vite.config.js`
- Deployment scripts are added to `package.json`
- Build output is optimized for static hosting

## Technologies Used

- **Vite** - Build tool and development server
- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **GitHub Pages** - Static hosting
- **CSS3** - Modern styling with gradients and animations

## License

MIT License - feel free to use this template for your own AI project showcases!