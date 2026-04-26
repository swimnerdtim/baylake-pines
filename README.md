# Baylake Pines Country Club

A neighborhood disc golf course website with Masters-style design.

## 🏌️ Live Site
https://swimnerdtim.github.io/baylake-pines/

## 🎯 Features
- Masters-inspired design (dark green, classic serif fonts)
- 9-hole course layout
- Mobile-responsive
- Auto-deploy on push

## 📝 How to Update Course Data

Edit `src/data/course.json` to add/update holes:

```json
{
  "number": 2,
  "address": "1234 Example Street",
  "distance": 120,
  "par": 3,
  "homeowner": "John Doe",
  "description": "A challenging approach with trees on the left.",
  "status": "active"
}
```

**Status options:**
- `"active"` - Hole is open and playable
- `"coming_soon"` - Placeholder for future holes

Then commit and push:
```bash
git add .
git commit -m "Add Hole 2"
git push
```

Site auto-deploys in ~2 minutes.

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📂 Structure

```
src/
├── data/
│   └── course.json       # Course data (edit this!)
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── Course.jsx        # All holes
│   └── About.jsx         # Info + etiquette
├── App.jsx               # Router
└── App.css               # Global styles
```

## 🎨 Design Notes

- Colors: `#0d2818` (dark green), `#2d5a2d` (medium green)
- Fonts: Georgia, Times New Roman (serif)
- Masters tagline: "A Tradition Unlike Any Other"

Built with React + Vite, deployed on GitHub Pages.
