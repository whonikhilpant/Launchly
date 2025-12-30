# Deployment Guide

## Quick Start: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Code
```bash
# Make sure your code is ready
npm run build  # Test the build locally
```

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. **Sign Up/Login**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Use your GitHub account for easiest integration

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your repository from the list
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Environment Variables** (if needed)
   - Add any environment variables in this step
   - For this project, none are required

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `your-project-name.vercel.app`

### Step 4: Custom Domain (Optional but Impressive)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Enter your domain name (e.g., `yourname.com`)
3. Follow DNS configuration instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records (Vercel will provide IPs)
4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate is automatically provisioned

---

## Alternative: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify

1. **Sign Up/Login**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - **Important**: Install the Next.js plugin:
     - Go to Site settings → Plugins
     - Search for "@netlify/plugin-nextjs"
     - Install it

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `random-name.netlify.app`

### Step 3: Custom Domain on Netlify

1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions
4. SSL is automatic

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Mobile responsive design works
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] HTTPS is enabled (automatic on both platforms)
- [ ] Custom domain configured (if applicable)
- [ ] Test Lighthouse score (should be 90+)

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to catch errors

### Images Not Loading
- Use Next.js `Image` component for all images
- Ensure images are in `public` folder

### Styling Issues
- Verify Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

### Performance Issues
- Check Lighthouse report
- Optimize images
- Reduce bundle size if needed

---

## Continuous Deployment

Both Vercel and Netlify automatically deploy on every push to your main branch. This is called "Continuous Deployment" and is enabled by default.

To disable auto-deploy:
- Vercel: Settings → Git → Production Branch → Configure
- Netlify: Site settings → Build & deploy → Continuous Deployment

---

## Environment Variables

If you need environment variables:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site settings → Environment variables

Access in code:
```typescript
process.env.NEXT_PUBLIC_YOUR_VAR
```

---

## Analytics (Optional)

### Vercel Analytics
- Built-in analytics in Vercel dashboard
- No code changes needed

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to environment variables
3. Create `lib/gtag.ts`:
```typescript
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
```
4. Add script to `layout.tsx`

---

## Success! 🎉

Your landing page is now live and accessible to the world. Share the URL in your portfolio and with recruiters!

