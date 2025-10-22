# Takeo Web - Next.js Application on Replit

## Overview
This is a Next.js 15.5.3 application using React 19 and Tailwind CSS 4. The project features a Takeoff Monkey-themed landing page with password-protected access to a whiteboard area. The project was migrated from Vercel to Replit on October 22, 2025.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.5.3
- **Runtime**: Node.js with npm package manager
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript 5

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page with Takeoff Monkey theme and password gate
  - `whiteboard/page.tsx` - Protected whiteboard area
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles with Tailwind and custom animations
- `public/` - Static assets (SVG icons)
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Features

### Landing Page
- Black background (#000000) with layered dark green jungle leaf decorations
- Takeoff Monkey branding with yellow (#E9E44C) logo and text
- "Takeo" title and "Enter the Monkey Cage" interactive link
- Password protection modal (password: "bananas")
- Fade-in animation on page load
- Fully responsive layout centered on all screen sizes

### Password Protection
- Client-side password gate for accessing the whiteboard
- Simple modal interface for password entry
- Redirects to `/whiteboard` on correct password
- "Access Denied" alert on incorrect password
- **Note**: This is a UX-level gate; users can bypass by navigating directly to /whiteboard. For true access control, implement server-side middleware.

### Whiteboard Area
- Protected route at `/whiteboard`
- Simple welcome screen
- Link to return to landing page

## Recent Changes (October 22, 2025)

### Landing Page Implementation
1. **Created Takeoff Monkey Theme**: Black background with jungle leaf SVG decorations
2. **Interactive Elements**: Password modal with client-side authentication
3. **Custom Animations**: Fade-in effect for logo and content on page load
4. **Responsive Design**: Flexbox layout that adapts to all screen sizes

### Migration from Vercel to Replit
1. **Removed Static Export Mode**: Changed from `output: 'export'` to dynamic server mode, which is required for Replit's environment
2. **Port Configuration**: Updated scripts to bind to port 5000 with host 0.0.0.0 for Replit compatibility
3. **Deployment Setup**: Configured autoscale deployment with build and start commands
4. **Dependencies**: Installed all npm packages (341 packages, no vulnerabilities)

### Key Configuration Changes
- Development server: `next dev -p 5000 -H 0.0.0.0`
- Production server: `next start -p 5000 -H 0.0.0.0`
- Deployment target: Autoscale (stateless, on-demand)

## Development

### Running Locally
The project uses a workflow that automatically starts the development server:
```bash
npm run dev
```

The application will be available at `http://0.0.0.0:5000`

### Building for Production
```bash
npm run build
npm run start
```

### Other Commands
- `npm run lint` - Run ESLint
- `npm run export` - Generate static export (legacy Vercel config)

## Important Notes

### Why SSR Mode is Required on Replit
- Replit's environment requires a dynamic Next.js server
- Static export mode (`output: 'export'`) is not compatible with Replit's hosting
- The application must bind to `0.0.0.0:5000` to be accessible

### Known Warnings
- You may see a warning about `allowedDevOrigins` in Next.js logs
- This is informational and does not affect functionality
- This warning will be addressed in future Next.js versions

## Environment Variables
Currently, no environment variables are required. If you add API integrations or databases in the future, use Replit's secrets management.

## Deployment
The project is configured for Replit's autoscale deployment:
- Build command: `npm run build`
- Start command: `npm run start`
- Port: 5000

## Security Notes
- No API keys or secrets are currently used
- The `.gitignore` file properly excludes sensitive files and build artifacts
- Client/server separation follows Next.js best practices
