# HACKFEST 2K26

A modern React website for the HACKFEST 2K26 hackathon at MKCE, Karur.

## Tech Stack

- **Frontend:** React (Vite), CSS3 (Custom Glassmorphism Design)
- **Deployment:** Vercel

## Setup Instructions

### Local Development

1. Navigate to the project directory:
   ```bash
   cd hackfest-2k26
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

### Production Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## Features

- **Responsive Design:** Optimized for all devices.
- **Glassmorphism UI:** Modern, aesthetic visuals with neon accents.
- **Dynamic Components:** Navbar, Hero, About, Themes, Timeline, Prizes, Register, Footer.
- **Registration Form:** Client-side form with demo submission (ready for backend integration).
- **Zero Backend Dependencies:** Fully static site optimized for Vercel deployment.
