# Baylake Pines Country Club - Handoff

## ✅ What's Built

**Live Site:** https://swimnerdtim.github.io/baylake-pines/

3-page website with Masters-style design:
1. **Home** - Welcome, stats, featured hole
2. **Course** - All 9 holes (Hole 1 live, 2-9 coming soon)
3. **About** - Story, etiquette, rules

**Current Course Status:**
- ✅ Hole 1: 2309 Trelawney Road, 65 ft, Par 2
- ⏳ Holes 2-9: Placeholders

## 📝 How to Add Holes

1. Edit `src/data/course.json`
2. Update a hole entry:

```json
{
  "number": 2,
  "address": "1234 Example Street",
  "distance": 150,
  "par": 3,
  "homeowner": "Jane Smith",
  "description": "Long approach with a water hazard on the right.",
  "status": "active"
}
```

3. Commit + push:
```bash
cd /Users/tim/.openclaw/workspace/baylake-pines
git add .
git commit -m "Add Hole 2"
git push
```

Site auto-deploys in ~2 minutes.

## 🎯 Next Steps

**Immediate:**
- Add holes 2-9 as baskets are installed
- Add homeowner names (optional)
- Add hole photos (create `public/images/` folder, reference in course.json)

**Optional Enhancements:**
- Course map (visual layout of holes in neighborhood)
- Photo gallery
- Hole difficulty ratings
- Seasonal conditions/updates

## 🎨 Design System

**Colors:**
- Dark green: `#0d2818` (header, text)
- Medium green: `#2d5a2d` (accents)
- Background: `#f8f8f8`

**Fonts:** Georgia, Times New Roman (serif)

**Vibe:** Masters Tournament (classic, elegant, understated)

## 🛠️ Tech Stack

- React + Vite
- GitHub Pages
- Auto-deploy via GitHub Actions
- No backend needed (static JSON data)

## 📂 Key Files

```
src/data/course.json          # ← Edit this to update holes
src/pages/Home.jsx            # Landing page
src/pages/Course.jsx          # Course grid
src/pages/About.jsx           # Info page
.github/workflows/deploy.yml  # Auto-deploy script
```

## 🚀 Deployment

**Auto-deploy:** Push to `main` branch → site updates in ~2 min

**Manual deploy:**
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

## 📞 Support

If you need changes:
1. Edit course.json yourself (easy!)
2. Ask Tim for design/layout changes
3. Check README.md for instructions

Built: 2026-04-26
Builder: Tim (AI assistant)
