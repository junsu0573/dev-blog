# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbo for faster development)
- **Build**: `npm run build` (uses Turbo for production build)  
- **Production server**: `npm start`
- **Linting**: `npm run lint` (ESLint with Next.js TypeScript rules)

## Project Architecture

This is a personal development blog built with Next.js 15, TypeScript, and PostgreSQL.

### Tech Stack
- **Framework**: Next.js 15 with App Router and Turbo
- **Styling**: Tailwind CSS 4 with PostCSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Prisma adapter
- **Language**: TypeScript with strict mode

### Key Directories
- `app/` - Next.js App Router pages and components
  - `components/` - Shared UI components (Header, Footer)
  - `blog/` - Blog-related pages and routing
  - `about/` - About page
- `prisma/` - Database schema and migrations
- `lib/` - Utility functions and configurations

### Database Schema
The Prisma schema includes:
- **User/Account/Session** models for NextAuth.js authentication
- **Post** model with categories and tags (many-to-many via PostTag)
- **Category** and **Tag** models for content organization
- Uses PostgreSQL with `cuid()` IDs

### Routing Structure
- `/` - Home page with recent posts
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts
- `/about` - About page

### Component Architecture
- Layout component uses Geist fonts and includes Header/Footer
- Components follow TypeScript strict mode
- Uses utility-first CSS with Tailwind classes

### Key Configurations
- TypeScript path alias: `@/*` maps to root directory
- ESLint extends Next.js core web vitals and TypeScript rules
- PostCSS configured for Tailwind CSS processing