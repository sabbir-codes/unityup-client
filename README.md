# UnityUp

UnityUp is a community-driven social development platform that connects people with meaningful local volunteer events. Discover a cause, join an initiative, and work together to create positive change.

## Live Site

Visit the client application: **[UnityUp Live](https://unityup-client.vercel.app)**

## Features

- Browse upcoming community events with real-time event data loaded from the backend.
- View detailed event information, organizers, locations, dates, and volunteer guidelines.
- Create, manage, and join community service events.
- Email/password registration and login powered by Better Auth.
- Google OAuth login and registration with automatic session creation.
- User profile avatars are displayed from the registered profile photo URL.
- Protected event-management routes require an authenticated account.
- Join and cancel event participation with instant ShadCN toast notifications.
- Responsive interface designed for desktop, tablet, and mobile screens.

## Tech Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4 and ShadCN UI components
- Better Auth with MongoDB
- Lucide React icons

## Getting Started

Install dependencies using the committed lockfile:

```bash
npm install
```

Create a `.env` file with the values from `.env.example`, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The application requires Better Auth and MongoDB configuration. Google authentication additionally requires Google OAuth credentials. For local development, configure this callback URL in Google Cloud:

```text
http://localhost:3000/api/auth/callback/google
```

## Validation

Run linting and a production build before deployment:

```bash
npm run lint
npm run build
```
