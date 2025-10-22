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
  - Jungle header image with Takeoff Monkey logo and green leaves
  - "Takeo: pre-construction, unjammed" headline in white
  - Five navigation links to sub-sections
  - Showcase area with slideshow component (ready for demo screenshots)
  - "Get Updates" CTA with email capture modal
  - Footer with copyright and link to www.takeoffmonkey.com
  - Black background with white text throughout
- Sub-routes:
  - `/whiteboard/slidedeck` - Full-screen slide deck viewer (13 slides)
  - `/whiteboard/story` - Our Story (placeholder)
  - `/whiteboard/prospectus` - Prospectus (placeholder)
  - `/whiteboard/demo` - Demo (placeholder)
  - `/whiteboard/widgets` - Widgets (placeholder)
- Components:
  - `Slideshow.tsx` - Accepts array of image URLs for demo screenshots
  - `EmailCapture.tsx` - Name and email form with fake submit handler

### Full-Screen Slide Deck Viewer
- Route: `/whiteboard/slidedeck`
- Features:
  - 13 pitch deck slides in full-screen black viewer
  - Keyboard navigation: Arrow keys (←/→) to navigate, Escape to close
  - Touch gestures: Swipe left/right on mobile devices
  - Navigation controls: Chevron buttons and close (X) button
  - URL-based deep linking: `?s=<number>` parameter for specific slides
  - Slide counter showing current position (e.g., "3 / 13")
  - Image preloading for instant navigation
  - Body scroll prevention while viewer is open
- Implementation:
  - `slides.ts` - Ordered array of 13 slide image paths
  - `Controls.tsx` - Navigation buttons with SVG icons and accessibility labels
  - `page.tsx` - Main viewer with keyboard, touch, and URL navigation
- Images: Stored in `public/deck/` (01.jpg through 13.jpg)

## Recent Changes (October 22, 2025)

### Landing Page Implementation
1. **Minimal Design**: Simple black background with centered white logo
2. **Clickable Logo**: Logo triggers password modal for whiteboard access
3. **Password Protection**: Client-side authentication (password: "100M")
4. **Responsive Design**: Logo scales appropriately on all screen sizes
5. **Font Configuration**: Montserrat Extra Bold (800 weight) used throughout

### Whiteboard Section Implementation (October 22, 2025)
1. **Complete Layout**: Full-featured presentation page with header, navigation, showcase, and footer
2. **Jungle Theme Design**: Black background with jungle header image featuring Takeoff Monkey logo
3. **Navigation System**: Five sub-routes with placeholder pages (slidedeck, story, prospectus, demo, widgets)
4. **Interactive Components**: Slideshow component and email capture modal
5. **Brand Styling**: High-contrast white text on black with yellow (#E9E44C) accent color on hover
6. **Responsive Design**: Mobile-first layout that adapts to all screen sizes

### Slide Deck Viewer Implementation (October 22, 2025)
1. **Full-Screen Experience**: True full-window viewer (100vw × 100vh) with black background
2. **13 Pitch Deck Slides**: Imported from attached JPGs, stored as 01.jpg - 13.jpg
3. **Multi-Input Navigation**: Keyboard (arrows/Esc), touch gestures (swipe), and on-screen controls
4. **URL State Management**: Query parameter `?s=N` enables deep linking and refresh persistence
5. **Performance Optimizations**: Adjacent slide preloading, robust NaN handling, tap-vs-swipe detection
6. **Accessibility**: All controls have aria-labels, keyboard focus rings, proper semantic HTML

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
