# 🚀 PopX Authentication Flow – React Modernization

This repository has been completely modernized and upgraded to match the feel of a modern startup SaaS product. The authentication flow is now production-ready, featuring a clean UI, robust client-side validation, smooth animations, and scalable state management.

## 📌 Overview

This project implements a complete user authentication journey:
- Modern Landing Page
- User Registration (with form validation)
- Login for registered users
- Protected Account Settings Page
- Profile avatar upload & preview
- Fully responsive and accessible UI

## 🧭 User Flow
Landing
   ↓
Register → Login → Account (Protected)

- New users register first.
- Already registered users log in.
- Only authenticated users can access the Account page.
- Unauthorized access is automatically redirected to Login.

## ✨ New Features & Improvements

### UI/UX Modernization
- **Redesigned Application:** Clean, professional, startup-style UI using Tailwind CSS.
- **shadcn/ui Components:** Integrated accessible, reusable components (Button, Input, Card, Label).
- **Icons:** Switched to modern `lucide-react` icons.

### Authentication Enhancements
- **State Management:** Integrated `zustand` with local storage persistence for a reliable auth state.
- **Form Validation:** Replaced manual validation with robust `react-hook-form` and `zod` schemas.
- **Protected Routes:** Refactored routing to use the global Zustand auth state to secure the application correctly.

### Animation System
- **Framer Motion:** Added premium, subtle animations including page transitions, form appearances, and button states to give it a startup-grade experience.

### Architecture Improvements
- **Component Architecture:** Reorganized directories into a standard clean architecture:
  `src/components/ui/`, `src/pages/`, `src/hooks/`, `src/routes/`, `src/utils/`.
- **Utils:** Added a `cn` utility for Tailwind class merging using `clsx` and `tailwind-merge`.

## 🛠️ New Dependencies

- `tailwindcss` & `@tailwindcss/vite` (v4 config) - For styling.
- `framer-motion` - For animations.
- `lucide-react` - For icons.
- `zustand` - For state management.
- `react-hook-form` & `@hookform/resolvers/zod` & `zod` - For robust form validation.
- `clsx` & `tailwind-merge` - For conditional Tailwind class construction.
- `@radix-ui/react-slot` & `@radix-ui/react-label` & `class-variance-authority` - Core dependencies for shadcn/ui.

## 📂 New Project Structure
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   └── Label.jsx
│   └── ProtectedRoute.jsx
├── hooks/
│   └── useAuth.js
├── pages/
│   ├── Account/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── Landing/
├── routes/
│   └── AppRoutes.jsx
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css

## 🖼️ Before vs After
**Before:**
- Manual state management and basic vanilla CSS.
- Manual object validation.
- Repetitive styles and standard native components.

**After:**
- Production-ready scalable styling with Tailwind and standardized utility classes.
- Accessible, reusable `shadcn/ui` based form components.
- Smooth visual transitions with `framer-motion`.
- Secure and persistent client-side authentication via `zustand`.

## ▶️ How to Run Locally

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

## 🧠 Design & Development Approach
- Mobile-first approach.
- Follows React anti-pattern fixes and React best practices.
- Focus on maintaining the original flow but executing it with high-end tools for a premium feel.
