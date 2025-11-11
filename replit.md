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
  - Large white Takeoff Monkey logo centered at top
  - "Takeo: pre-construction, unjammed" headline in white
  - Five navigation links: See the deck, Our Story, Whitepaper, Demo, Widgets
  - Showcase area with slideshow component (ready for demo screenshots)
  - "Get Updates" CTA with email capture modal (Google Sheets integration)
  - Footer with copyright and link to www.takeoffmonkey.com
  - Black background with white text throughout
- Navigation:
  - "See the deck" - `/TOM_Deck_2025_10_30.pdf` - Pitch deck PDF (opens in new tab)
  - "Our Story" - `/whiteboard/story` - Full story page with Tommy's bio and company history
  - "Whitepaper" - `/Takeo_Whitepaper_2025_v2.pdf` - Takeo whitepaper PDF (opens in new tab)
  - "Demo" - `https://bid-manager-2-logan14.replit.app/` - External demo link
  - "Widgets" - `/whiteboard/widgets` - Widgets (placeholder)
  - `/whiteboard/slidedeck` - Full-screen slide deck viewer (13 slides) - accessible via direct URL
- Components:
  - `Slideshow.tsx` - Auto-cycling slideshow with 4 demo screenshots (10 seconds per image), manual navigation controls
  - `EmailCapture.tsx` - Name, company name, and email form with Google Sheets integration

### AI Chatbot (November 11, 2025)
- **Platform**: N8N Chat widget with AI financial analyst
- **Location**: Whiteboard page only (behind password protection)
- **API Endpoint**: https://takeoffmonkey.app.n8n.cloud/webhook/26146015-f148-46cf-badf-4bc530857bdb/chat
- **Features**:
  - Floating yellow chat bubble in bottom-right corner
  - AI responses powered by N8N with updated vector store
  - Custom branding with Takeo colors (black header, yellow user messages, white bot messages)
  - Welcome message: "Hi there, I'm the *actual* monkey of Takeoff Monkey. I can answer basic questions from our monthly P&Ls and monthly summary reports."
- **Styling**: Matches site brand with black (#000000) header, yellow (#E9E44C) user messages, white bot responses
- **Implementation**: Custom React component (`ChatWidget.tsx`) with N8N webhook integration
- **Request Format**: `POST /webhook/chatbotv { "action": "sendMessage", "sessionId": "...", "chatInput": "..." }`
- **Response Format**: `{ "output": "response text" }`

**Previous Implementation (November 2, 2025):**
- Heroku DataChimp with PandasAI analyzing 23,831 DynamoDB rows
- Switched back to N8N after vector store update

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
1. **Complete Layout**: Full-featured presentation page with centered logo, headline, navigation, showcase, and footer
2. **Clean Design**: Black background with large white Takeoff Monkey logo at top
3. **Navigation System**: Five navigation links - See the deck (slidedeck), Our Story, Whitepaper (PDF - TOM_Deck_2025_10_30.pdf), Demo (external link), Widgets
4. **Interactive Components**: Slideshow component with 4 cropped demo screenshots (1200x675px) cycling every 10 seconds, email capture modal with Google Sheets integration, and custom AI chatbot
5. **Brand Styling**: High-contrast white text on black with yellow (#E9E44C) accent color on hover
6. **Responsive Design**: Mobile-first layout that adapts to all screen sizes
7. **AI Chatbot**: Custom React chatbot connected to PandasAI on Heroku (November 2, 2025)

### Slide Deck Viewer Implementation (October 22, 2025)
1. **Full-Screen Experience**: True full-window viewer (100vw × 100vh) with black background
2. **13 Pitch Deck Slides**: Imported from attached JPGs, stored as 01.jpg - 13.jpg
3. **Multi-Input Navigation**: Keyboard (arrows/Esc), touch gestures (swipe), and on-screen controls
4. **URL State Management**: Query parameter `?s=N` enables deep linking and refresh persistence
5. **Performance Optimizations**: Adjacent slide preloading, robust NaN handling, tap-vs-swipe detection
6. **Accessibility**: All controls have aria-labels, keyboard focus rings, proper semantic HTML

### Migration from Vercel to Replit
1. **Removed Static Export Mode**: Changed from `output: 'export'` to dynamic server mode, which is required for Replit's environment
2. **Port Configuration**: Updated scripts to bind to dynamic PORT with host 0.0.0.0 for Replit compatibility
3. **Deployment Setup**: Configured Cloud Run (Autoscale) deployment with optimized build and start commands
4. **Health Check Endpoint**: Added `/api/health` route for fast deployment health validation
5. **Dependencies**: Installed all npm packages (341 packages, no vulnerabilities)

### Key Configuration Changes
- Development server: `next dev -p 5000 -H 0.0.0.0`
- Production server: `next start -p $PORT -H 0.0.0.0` (via start.sh)
- Deployment target: Autoscale (Cloud Run)
- Health check: `/api/health` endpoint

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

**Note**: The start command uses `next start -p 5000 -H 0.0.0.0` to explicitly bind to port 5000 for VM deployments.

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
The project is configured for Replit's Cloud Run (Autoscale) deployment:
- Deployment target: Autoscale (Cloud Run)
- Build command: `npm run build`
- Start command: `sh start.sh` (optimized port binding script)
- Port: Uses PORT environment variable from Replit, defaults to 5000
- Health check: `/api/health` endpoint for fast startup validation
- ESLint: Disabled during builds to prevent warnings from blocking deployment

The `start.sh` script allows the app to use whatever port Replit's Cloud Run deployment assigns via the PORT environment variable, ensuring compatibility with the deployment system's port forwarding.

**Health Check Endpoint**: The `/api/health` route provides a lightweight endpoint that responds immediately with `{"status": "ok"}`, allowing deployment health checks to pass quickly without rendering the full landing page.

## Security Notes
- No API keys or secrets are currently used
- The `.gitignore` file properly excludes sensitive files and build artifacts
- Client/server separation follows Next.js best practices
