# Agentic AI Industry Transformation Explorer

A production-ready Next.js web application demonstrating how **Agentic AI** transforms Telecom processes across Work, Workforce, Workbench, and Digital Core.

## Features

- **12 Telecom Processes**: Comprehensive coverage of key Telecom transformation areas
- **4W Impact Analysis**: Detailed breakdown of Work, Workforce, Workbench, and Digital Core impacts
- **Agentic AI Blueprints**: Agent architectures, responsibilities, and human approval checkpoints
- **Value Themes**: Revenue growth, cost optimization, customer experience, and more
- **Client-Ready**: Designed for use in client meetings to explore processes and drive sales discussions

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Static JSON Data** (no database required)
- **Vercel-Ready** (zero configuration deployment)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "CM Agentic"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is configured for zero-configuration deployment on Vercel.

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "New Project" and import your repository.

4. Vercel will automatically detect Next.js and configure the build settings.

5. Click "Deploy" - your app will be live in minutes!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in.

2. Click "New Project".

3. Connect your Git repository or upload the project folder.

4. Vercel will auto-detect Next.js settings.

5. Click "Deploy".

## Project Structure

```
/app
  /layout.tsx                 # Root layout with header and footer
  /page.tsx                   # Home page
  /telecom
    /page.tsx                 # Telecom process landscape
    /[processId]
      /page.tsx               # Process deep dive page
/components
  IndustryHeader.tsx          # Top navigation
  Footer.tsx                  # Footer component
  ProcessMap.tsx              # Process grid by category
  ProcessTile.tsx             # Individual process card
  FourWSection.tsx            # 4W impact display
  AgentBlueprint.tsx          # Agent architecture display
  ValueThemeBadges.tsx        # Value theme badges
/data
  telecomProcesses.json       # 12 Telecom processes
  valueThemes.json            # Value theme definitions
  agenticPatterns.json        # Agentic pattern definitions
/lib
  types.ts                    # TypeScript type definitions
  data.ts                     # Data loading utilities
  utils.ts                    # Utility functions
```

## Key Pages

- **Home (`/`)**: Landing page with industry selection
- **Telecom Landscape (`/telecom`)**: Grid view of all 12 processes organized by category
- **Process Deep Dive (`/telecom/[processId]`)**: Detailed view of a single process including:
  - Process overview and business goals
  - KPIs impacted
  - 4W Impact (Work, Workforce, Workbench, Digital Core)
  - Agentic AI Blueprint (agents, patterns, systems)
  - Benefits
  - Risks & Controls
  - Navigation (previous/next process)

## Data Model

All data is stored in static JSON files under `/data`:

- **Processes**: Complete process definitions with 4W impacts, agents, benefits, and controls
- **Value Themes**: Business value categories (revenue growth, cost optimization, etc.)
- **Agentic Patterns**: Reusable workflow patterns (Intake → Analyze → Configure → Validate → Approve, etc.)

## Customization

### Adding New Processes

1. Add a new process object to `/data/telecomProcesses.json`
2. Follow the existing `Process` type structure from `/lib/types.ts`
3. The process will automatically appear on the Telecom landscape page

### Modifying Value Themes

Edit `/data/valueThemes.json` to add or modify value themes. Update the color mapping in `ValueThemeBadges.tsx` if needed.

### Styling

The project uses Tailwind CSS. Modify `tailwind.config.ts` to customize the design system.

## Build Verification

Before deploying, ensure the build succeeds:

```bash
npm run build
```

This will:
- Type-check all TypeScript files
- Validate JSON data structure
- Build optimized production bundle
- Verify all pages are statically generated where possible

## Support

For issues or questions, please refer to the Next.js documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

Built with ❤️ for client-facing demonstrations of Agentic AI transformation in Telecom.
