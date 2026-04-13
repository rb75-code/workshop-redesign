# FOSSEE Workshop Booking Redesign

### How it works
This project uses a FastAPI (Python) backend to serve workshop data and a React frontend for a modern, mobile-first user experience.

### Reasoning
Design Principles: I focused on a "Mobile-First" approach. Students often check schedules on their phones, so I used large tap targets and a clean vertical layout.
Responsiveness: By using a max-width container and Flexbox, the site feels like a native app on mobile while staying centered on desktop.
Trade-offs: I chose FastAPI for the backend because it is much lighter than Django for simple JSON data, which keeps the site fast.
Challenges: The main challenge was making the "House Full" state clear without being discouraging. I used color desaturation and a checkmark icon to show the workshop is closed.

### Setup
1. Backend: `cd backend` -> `uvicorn main:app --reload`
2. Frontend: `cd frontend` -> `npm start`
