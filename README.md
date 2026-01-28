# HACKFEST 2K26

A modern React website for the HACKFEST 2K26 hackathon at MKCE, Karur.

## Tech Stack

- **Frontend:** React (Vite), CSS3 (Custom Glassmorphism Design)
- **Backend:** Flask, SQLite, SQLAlchemy

## Setup Instructions

### Frontend (React)

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

### Backend (Flask)

1. Navigate to the backend directory:
   ```bash
   cd hackfest-2k26/backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # Mac/Linux
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
   The API will be available at `http://localhost:5000`.

## Features

- **Responsive Design:** Optimized for all devices.
- **Glassmorphism UI:** Modern, aesthetic visuals with neon accents.
- **Dynamic Components:** Navbar, Hero, About, Themes, Timeline, Prizes, Register, Footer.
- **Live Registration:** Functional form connecting to a local SQLite database via Flask.

## API Endpoints

- `POST /register`: Register a new team.
- `GET /registrations`: View all registered teams.
