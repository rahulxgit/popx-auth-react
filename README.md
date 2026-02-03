🚀 PopX Authentication Flow – React Assignment

A clean, responsive authentication flow built using React, designed to match the provided PopX UI screens.
This project demonstrates structured frontend development, client-side validation, protected routing, and UI polish.

📌 Overview

This application implements a complete user authentication journey:

Landing page

User registration

Login for already registered users

Protected account page

Profile avatar with upload & preview

Responsive UI with smooth interactions

The focus of this project is clarity, structure, and user experience, rather than heavy libraries or over-engineering.

🧭 User Flow
Landing
   ↓
Register → Login → Account (Protected)


New users register first

Already registered users log in

Only authenticated users can access the Account page

Unauthorized access is automatically redirected to Login

✨ Features

✅ React Router–based navigation

✅ Client-side form validation (required fields)

✅ Login authentication using LocalStorage

✅ Protected routes (Account page)

✅ Profile avatar (SVG / Image upload + preview)

✅ Online status indicator on avatar

✅ Responsive & mobile-friendly layout

✅ Clean, reusable components

✅ Human-written, readable code (no UI libraries)

🛠️ Tech Stack

React.js (Vite)

React Router DOM

CSS (Vanilla, no frameworks)

Browser LocalStorage

SVG for scalable UI assets

📂 Project Structure
src/
├── assets/
│   └── images/
│
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Landing/
│   │   ├── Landing.jsx
│   │   └── landing.css
│   │
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── auth.css
│   │
│   ├── PostLogin/
│   │   ├── PostLogin.jsx
│   │   └── postLogin.css
│   │
│   └── Account/
│       ├── Account.jsx
│       └── account.css
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css

🔐 Authentication Logic

User data is stored in localStorage after registration

Login validates credentials against stored data

Account page is wrapped with a protected route

Unauthorized users are redirected to /login

This simulates real-world auth flow without a backend, keeping the project focused on frontend fundamentals.

🖼️ Profile Avatar

SVG-based PopX avatar with brand styling

Online status indicator

Hover animation

Optional image upload with instant preview

Uploaded image persists using LocalStorage

📱 Responsive Design

Mobile-first layout

Avatar scales down for small screens

Clean spacing and typography for all screen sizes

▶️ How to Run Locally
npm install
npm run dev


Then open:

http://localhost:5173

🧠 Design & Development Approach

Simple state management using React hooks

Reusable UI components

Clear separation of concerns

No third-party UI libraries (intentional)

Code written to be readable and maintainable

👤 Author

Rahul Kumar
Frontend / Full-Stack Developer
Focused on building clean UI, scalable React apps, and user-centric experiences.

📎 Notes

This project was built as an assignment submission

Backend integration can be easily added in future

Structure and logic are designed to scale
