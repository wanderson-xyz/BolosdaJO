# Overview

This is a React-based website for "Bolos da Jô", a Brazilian home bakery business that specializes in cakes, party kits, brownies, and savory snacks. The site serves as a digital storefront designed to showcase products and drive sales through WhatsApp integration. It's built with modern web technologies including React, TypeScript, Tailwind CSS, and shadcn/ui components, with a focus on mobile-first design and conversion optimization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system based on warm, bakery-inspired color palette
- **UI Components**: shadcn/ui component library for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: TanStack Query for server state management and caching

## Design System
- **Color Palette**: Soft pink primary (#340 45% 85%), warm beige secondary, and brown accents
- **Typography**: Poppins (primary) and Dancing Script (accent) fonts from Google Fonts
- **Layout**: Mobile-first responsive design with consistent spacing using Tailwind units
- **Components**: Custom product cards, carousels, and WhatsApp integration buttons

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development**: Vite for fast development and hot module replacement
- **Storage Interface**: Abstract storage layer with in-memory implementation (designed for future database integration)
- **Build System**: ESBuild for production bundling

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Schema**: Basic user table structure with UUID primary keys
- **Migrations**: Drizzle Kit for database schema management

## Content Management
- **Products**: Static data in TypeScript files with structured product information
- **Images**: Static assets with optimized loading components
- **SEO**: JSON-LD structured data for local business schema markup

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **@radix-ui/***: Headless UI primitives for accessibility and behavior
- **@tanstack/react-query**: Server state management and data fetching
- **framer-motion**: Animation library for smooth user interactions

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **TypeScript**: Type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

## Business Integrations
- **WhatsApp Business API**: Direct messaging integration for order placement
- **Google Maps**: Embedded location display for business address
- **Google Fonts**: Web font loading for Poppins and Dancing Script

## Hosting and Deployment
- **Vercel**: Configured for deployment with custom domain
- **Static Assets**: Optimized image handling with lazy loading
- **SEO Tools**: Meta tags, Open Graph, and structured data for search optimization

The application is designed to be easily extensible, with plans for future integration of online ordering systems, payment processing, and full database-backed product management.