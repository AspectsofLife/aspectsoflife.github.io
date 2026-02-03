# Aspects of life

**Aspects of life** is a digital storytelling archive project established in 2026. It serves as a platform to share and preserve life stories, emphasizing that every story matters and every life is a chapter.

## Features

- **Hero Section**: Welcoming introduction with a "Submit Your Story" call to action.
- **Mission Statement**: Explains the core philosophy of the project.
- **Submission Form**: A user-friendly form for sharing personal stories (name, email, story content, and file uploads).
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Modern UI**: Built with a clean, aesthetic design using custom fonts and animations.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aspects-of-life.git
   cd aspects-of-life
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Deployment

This project is configured for deployment to GitHub Pages.

1. Ensure your `vite.config.js` has the correct `base` path if not deploying to a user site root.
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.

## Project Structure

```
├── public/          # Static assets (fonts, images)
├── src/
│   ├── components/  # Reusable UI components
│   ├── lib/         # Utility functions
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles & Tailwind directives
├── index.html       # HTML entry point
├── package.json     # Project dependencies and scripts
└── vite.config.js   # Vite configuration
```

## License

All rights reserved. Aspects of life Project — Est. 2026.
