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
- Pure black background (#000000)
- White Takeoff Monkey logo centered on screen
- Logo is clickable and triggers password modal
- Password protection modal (password: "100M")
- Clean, minimal design
- Fully responsive layout

### Password Protection
- Client-side password gate for accessing the whiteboard
- Simple modal interface for password entry
- Redirects to `/whiteboard` on correct password (password: "100M")
- "Access Denied" alert on incorrect password
- **Note**: This is a UX-level gate; users can bypass by navigating directly to /whiteboard. For true access control, implement server-side middleware.

### Whiteboard Area
- Main route at `/whiteboard` with complete presentation layout
- Features:
  - Header with "Takeoff Monkey Presents" and "Takeo: pre-construction, unjammed"
  - Five navigation links to sub-sections
  - Showcase area with slideshow component (ready for demo screenshots)
  - "Get Updates" CTA with email capture modal
  - Footer with copyright and link to www.takeoffmonkey.com
  - Dotted grid background (subtle notebook effect)
- Sub-routes (all with placeholder content):
  - `/whiteboard/slidedeck` - Slide Deck
  - `/whiteboard/story` - Our Story
  - `/whiteboard/prospectus` - Prospectus
  - `/whiteboard/demo` - Demo
  - `/whiteboard/widgets` - Widgets
- Components:
  - `Slideshow.tsx` - Accepts array of image URLs for demo screenshots
  - `EmailCapture.tsx` - Name and email form with fake submit handler

## Recent Changes (October 22, 2025)

### Landing Page Implementation
1. **Minimal Design**: Simple black background with centered white logo
2. **Clickable Logo**: Logo triggers password modal for whiteboard access
3. **Password Protection**: Client-side authentication (password: "100M")
4. **Responsive Design**: Logo scales appropriately on all screen sizes
5. **Font Configuration**: Montserrat Extra Bold (800 weight) used throughout

### Whiteboard Section Implementation (October 22, 2025)
1. **Complete Layout**: Full-featured presentation page with header, navigation, showcase, and footer
2. **Dotted Grid Background**: Subtle dotted notebook pattern across entire viewport
3. **Navigation System**: Five sub-routes with placeholder pages (slidedeck, story, prospectus, demo, widgets)
4. **Interactive Components**: Slideshow component and email capture modal
5. **Brand Styling**: Clean modern design with yellow (#E9E44C) accent color on hover
6. **Responsive Design**: Mobile-first layout that adapts to all screen sizes

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
