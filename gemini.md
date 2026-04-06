# 🤖 MyLink Project Master Guide (@gemini.md)

This file is the **Source of Truth** for Gemini (AI Agent) to understand project context and maintain design/functional consistency. All file references use `@` prefix.

---

## 🎯 Project Overview
- **Name:** MyLink
- **Purpose:** High-quality private portfolio/profile site for developer Hataehyun.
- **Design Concept:** 
  - **Light Mode:** Neo-Brutalism (Bold colors, thick black borders, sharp edges)
  - **Dark Mode:** Cyberpunk (Pure black bg, neon/fluorescent accents, glow effects)
- **Stack:** Next.js (App Router), Tailwind CSS 4, shadcn/ui, Firebase (Firestore/Auth)

---

## 🎨 Design System & UI Rules
### 1. Theme Tokens (@app/globals.css)
- **Light (Neo-Brutalism):**
    - BG: `#fdfbf7` / Border: `border-4 border-black`
    - Shadow: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
    - Palette: Magenta, Cyan, Yellow (High Saturation)
- **Dark (Cyberpunk):**
    - BG: `#0a0a0a` / Border & Text: `#00ff00` (Neon Green)
    - Glow: `drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]`

### 2. Component Standards (@components/ui/)
- Use `cn()` from `@lib/utils.ts` for class merging.
- Interactive elements must include 'sink-on-click' motion (`active:translate-y-1`).

---

## 🛠 Status & Backlog

### ✅ Completed
- [x] Project scaffolding & shadcn-ui (@components.json)
- [x] Core layout & routing (@app/layout.tsx, @app/page.tsx)
- [x] Global styles & design tokens (@app/globals.css)
- [x] Firebase initialization (@lib/firebase.ts)

### 🚧 Active Backlog
- [ ] **[P1] Firebase Real-time Integration:** Guestbook CRUD (@components/guestbook.tsx)
- [ ] **[P1] Github API Integration:** Live contribution widget (@components/github-widget.tsx)
- [ ] **[P2] Command Palette:** Search & navigation (@components/command-menu.tsx)
- [ ] **[P2] Drive Direct Mapping:** Resume URL binding (@app/page.tsx)
- [ ] **[P3] Custom Error Page:** Cyberpunk 404 (@app/not-found.tsx)

---

## ⚠️ AI Mandates
1. **Design Integrity:** Strictly follow Neo-Brutalism theme defined in `@app/globals.css`.
2. **SEO Suppression:** Maintain `noindex` in `@app/layout.tsx` metadata.
3. **Performance:** Prioritize direct URL binding for Drive resources to avoid API lag.
4. **Referencing:** Always use `@` prefix for file paths in docs and chat.
5. **Validation:** Run `npm run build` after major changes to ensure integrity.

---

## 📝 Session Log (Last Updated: 2026-04-06)
- **Latest:** Refactored `@gemini.md` to English for token efficiency. Initiating Firebase Guestbook integration.
