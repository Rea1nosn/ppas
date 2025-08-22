# Electro Israel - Premium Tobacco E-commerce Platform

## Overview

Electro Israel is a modern e-commerce web application for premium tobacco products in Israel. It showcases cigarettes, e-cigarettes, heated tobacco systems, and disposable vapes with a futuristic neon-themed design. The platform features a cyberpunk aesthetic with purple gradients, neon accents, and smooth animations to create an immersive shopping experience for adult smokers in Israel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and animations
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js for REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for product CRUD operations with validation
- **Development Server**: Integrated Vite development server with hot module replacement

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Schema**: Defined schemas for users and products with proper relationships
- **Validation**: Zod schemas for runtime type validation and data integrity
- **Migration**: Drizzle Kit for database migrations and schema management

### UI/UX Design System
- **Theme**: Custom cyberpunk aesthetic with neon colors (cyan, pink, blue, purple)
- **Typography**: Orbitron font for headings, Inter for body text
- **Color Palette**: Dark backgrounds with gradient overlays and neon accents
- **Animations**: CSS animations for floating elements, glowing effects, and smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Component Architecture
- **Layout Components**: Header with smooth scroll navigation, Footer with organized links
- **Product Components**: ProductCard for grid display, ProductModal for detailed view
- **Section Components**: Hero with parallax effects, About with statistics, Contact form
- **UI Components**: Comprehensive shadcn/ui component library with custom theming

### Development Workflow
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Code Quality**: Consistent imports and exports with proper module organization
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Development**: Hot reload for both frontend and backend changes

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon cloud database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect for database operations
- **@tanstack/react-query**: Server state management with caching and synchronization

### UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility for dynamic styling

### Development and Build Tools
- **vite**: Fast build tool with React plugin and development server
- **tsx**: TypeScript execution engine for Node.js development
- **esbuild**: Fast JavaScript bundler for production server builds

### Additional Libraries
- **wouter**: Minimalist routing library for React applications
- **date-fns**: Date utility library for formatting and manipulation
- **lucide-react**: Icon library with consistent SVG icons
- **react-icons**: Additional icon sets including social media icons

### Replit-Specific Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tool integration for Replit