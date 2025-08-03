# Bali Tour Packages Landing Page

## Overview

This is a responsive, lead-generation travel landing page for "Bali Tour Packages" by TGOTRIP. The application showcases 6 curated Bali travel packages with an emphasis on converting visitors into leads through strategic CTAs and mobile-optimized design. Built as a full-stack application with React frontend and Express backend, it features a modern travel-focused UI with tropical theming and comprehensive lead capture functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom tropical color scheme (teal, coral, sunset orange)
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for lead management
- **Data Storage**: In-memory storage (MemStorage class) with interfaces designed for easy database migration
- **Schema Validation**: Zod for runtime type checking and input validation
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Tables**: 
  - `users` - Authentication system (prepared for future use)
  - `leads` - Customer lead capture with contact details and package preferences
- **Schema Validation**: Drizzle-zod integration for automatic schema-to-TypeScript type generation

### Design System
- **Component Library**: Comprehensive UI component system with consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Color Scheme**: Custom tropical palette with CSS variables for theme consistency
- **Typography**: Hierarchical text styling with accessibility considerations
- **Icons**: Lucide React for consistent iconography throughout the application

### Lead Generation Features
- **Hero Section**: Prominent lead capture form with travel-specific fields
- **Package Cards**: Interactive package displays with individual booking CTAs
- **WhatsApp Integration**: Sticky floating CTA for instant customer communication
- **Form Validation**: Client and server-side validation for data integrity
- **Success Feedback**: Toast notifications for user interaction confirmation

### Mobile Optimization
- **Responsive Grid**: Adaptive package card layout (2-3 per row based on screen size)
- **Touch-Friendly**: Appropriately sized touch targets for mobile interaction
- **Performance**: Optimized images and efficient component rendering
- **WhatsApp CTA**: Sticky positioning optimized for mobile user experience

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation resolver for React Hook Form
- **wouter**: Lightweight routing library for single-page application navigation
- **date-fns**: Date manipulation and formatting utilities
- **class-variance-authority**: Type-safe CSS class variant management
- **clsx & tailwind-merge**: Conditional CSS class composition

### UI Component Dependencies
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives
- **lucide-react**: Modern icon library with consistent styling
- **embla-carousel-react**: Touch-friendly carousel implementation
- **cmdk**: Command palette and search functionality

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **zod**: Runtime type validation and schema definition

### Development Tools
- **tsx**: TypeScript execution environment for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

### Database Integration
- **PostgreSQL**: Production database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL provider for scalable hosting
- **Migration System**: Drizzle Kit for database schema version control