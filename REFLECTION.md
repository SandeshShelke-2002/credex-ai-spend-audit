# Reflection

## 1. Hardest bug
The hardest bug was a Supabase insert error caused by row-level security. Initially I assumed database connection was broken, but debugging logs showed insert requests reaching Supabase. After reading documentation, I discovered public insert policies were required. Creating an insert policy solved the issue.

## 2. Decision reversed
Initially I planned to use TypeScript, but switched to JavaScript to reduce setup complexity and move faster under deadline pressure.

## 3. Week 2 improvements
If given more time, I would add multi-tool comparison, PDF export, benchmark mode, and stronger AI-generated summaries.

## 4. AI usage
I used ChatGPT for debugging, code structure guidance, and documentation drafting. I did not rely on AI for deployment credentials or pricing verification. One incorrect suggestion was an import path issue which I had to manually debug.

## 5. Self-rating
- Discipline: 8/10 — maintained consistent progress.
- Code quality: 7/10 — functional but could be cleaner.
- Design sense: 7/10 — minimal but usable UI.
- Problem solving: 8/10 — resolved multiple integration issues.
- Entrepreneurial thinking: 6/10 — product thinking improved during assignment.