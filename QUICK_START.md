# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page!

### 3. Build for Production
```bash
npm run build
npm start
```

### 4. Deploy to Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! 🎉

---

## 📝 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your color palette
  }
}
```

### Update Content
- Hero section: `components/Hero.tsx`
- Features: `components/Features.tsx`
- About: `components/About.tsx`
- Footer: `components/Footer.tsx`

### Update Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // ...
}
```

---

## 🐛 Troubleshooting

**Dependencies not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
- Check Node.js version (18+ required)
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

**Styling issues?**
- Ensure Tailwind is configured
- Check `globals.css` is imported in `layout.tsx`

---

## 📚 Documentation

- Full README: `README.md`
- Deployment Guide: `DEPLOYMENT.md`
- Project Summary: `PROJECT_SUMMARY.md`

---

**Happy coding! 🎨**

