# Overview

This is a digital marketing agency website called "Nexstar Media" built with React, Vite, and TypeScript. The platform showcases a comprehensive suite of digital services including social media marketing, branding, B2B marketing, web development, e-commerce solutions, and emerging technologies like AR and OTT platforms. The application features a multi-page marketing website with extensive service descriptions, pricing pages, portfolio showcases, and a contact system with an integrated chatbot for customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System:**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and dev server, configured to run on port 5000
- **React Router** for client-side routing across 30+ page components
- Component structure follows atomic design principles with shared, layout, and page-level components

**UI Component Strategy:**
- **shadcn/ui** components built on Radix UI primitives for accessible, composable UI elements
- Extensive use of Radix UI components (Dialog, Accordion, Carousel, Toast, etc.) for complex interactions
- Custom components organized by feature domain (homepage, contact, shopify, shared)
- Path aliases configured (`@/*` pointing to `src/*`) for clean imports

**Styling Approach:**
- **Tailwind CSS** with custom theme configuration for consistent design system
- CSS custom properties for theme colors supporting light/dark modes
- Custom font stack: Inter (body), Space Grotesk (headlines), Dancing Script (cursive accents)
- Design tokens defined for primary (#478BFF blue), accent (#9F50FF purple), and background colors
- Animation utilities via `tailwindcss-animate` plugin

**State Management:**
- Local component state using React hooks (useState, useEffect)
- Form state managed via `react-hook-form` with Zod schema validation
- No global state management library - application complexity doesn't require Redux/Zustand
- Toast notifications handled through custom hook-based system

## Backend Architecture

**Server-Side Logic:**
- Minimal backend - primarily a static/client-side application
- Server actions marked with `'use server'` directive for potential future SSR/API integration
- Chatbot logic implemented as server-side flow using keyword pattern matching

**Data Persistence:**
- Contact form submissions are client-side only (no database integration currently)
- Placeholder image data stored in JSON file (`placeholder-images.json`)
- No authentication or user management system implemented

**API Design:**
- Chat flow uses rule-based keyword matching against regex patterns
- Canned responses stored in object mapping for chatbot interactions
- No REST or GraphQL APIs - purely frontend-driven application

## External Dependencies

**Third-Party Services:**
- **Firebase** (v11.9.1) - Configured but integration details not evident in provided files
- **Google Fonts** - Inter, Space Grotesk, Dancing Script loaded via CDN
- **Unsplash/ImageKit/Drive** - Image hosting for marketing assets and placeholders
- **Pexels** - Video content for service demonstrations

**Development Tools:**
- **TypeScript** with strict mode enabled for type safety
- **ESLint** configuration implied through package structure
- **Patch-package** for managing third-party package modifications

**UI Libraries:**
- **Embla Carousel** with autoplay plugin for image/content sliders
- **Recharts** for data visualization components (charts on analytics pages)
- **Lucide React** as the icon library
- **date-fns** for date manipulation
- **class-variance-authority** and **clsx** for conditional className composition

**Form & Validation:**
- **react-hook-form** for performant form handling
- **Zod** for runtime type validation and schema definition
- **@hookform/resolvers** to integrate Zod with react-hook-form

**Deployment Considerations:**
- Application expects to run on `0.0.0.0:5000` for both dev and preview modes
- Static build output via `vite build` with TypeScript compilation check
- No server-side rendering - optimized for static hosting (Vercel, Netlify, etc.)