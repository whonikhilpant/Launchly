# 🚀 Deploy Launchly to Vercel - Step by Step

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `launchly` (or any name you prefer)
4. Description: "Launchly - Modern landing page built with Next.js"
5. Set to **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/launchly.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Or if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/launchly.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
   - **Best option**: Sign in with your GitHub account (makes deployment seamless)
3. Once logged in, click **"Add New..."** → **"Project"**
4. You'll see a list of your GitHub repositories
5. Find and click **"Import"** next to your `launchly` repository
6. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js ✅
   - **Root Directory**: `./` ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅
   - **Install Command**: `npm install` ✅
7. Click **"Deploy"**
8. Wait 2-3 minutes for the build to complete
9. **🎉 Your site is live!** You'll get a URL like: `launchly.vercel.app`

## Step 4: Custom Domain (Optional but Impressive)

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Enter your domain (e.g., `launchly.com` or `yourname.dev`)
3. Follow the DNS configuration instructions:
   - Add a **CNAME** record pointing to `cname.vercel-dns.com`
   - Or add **A** records (Vercel will provide IP addresses)
4. Wait 5-60 minutes for DNS propagation
5. SSL certificate is automatically provisioned by Vercel

## ✅ Verification Checklist

After deployment, verify:
- [ ] Site loads at the Vercel URL
- [ ] All sections display correctly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Animations are smooth
- [ ] No console errors (check browser DevTools)

## 🎯 Your Live URL

Once deployed, your Launchly landing page will be live at:
- **Vercel URL**: `https://launchly-xxxxx.vercel.app` (or your custom domain)
- Share this URL in your portfolio and with recruiters!

## 🔄 Future Updates

Every time you push to GitHub, Vercel will automatically:
- Detect the changes
- Build the new version
- Deploy it (usually takes 2-3 minutes)

No manual deployment needed! 🚀

---

**Need help?** Check the full deployment guide in `DEPLOYMENT.md`

