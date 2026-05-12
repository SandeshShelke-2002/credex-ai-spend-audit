# Architecture

## Stack
- Next.js frontend
- Supabase database
- Vercel deployment

## Data Flow

User Input -> SpendForm -> Audit Engine -> Results UI
                     ↓
               LeadCapture -> Supabase

## Why this stack
Next.js provides easy deployment and routing.
Supabase gives fast backend setup.

## Scale plan
For 10k audits/day:
- caching
- server actions
- optimized DB indexes