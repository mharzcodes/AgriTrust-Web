# AgriTrust GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Build Locally
```bash
npm run build
npm run preview
```

### 3. Deploy to GitHub Pages

#### Option A: Manual Deployment (Recommended)
```bash
npm run deploy:prod
```

#### Option B: Using GitHub Actions (Automatic)
1. Push your code to the `main` or `master` branch
2. The GitHub Action will automatically build and deploy
3. Check the Actions tab in your GitHub repository

## 🔧 Configuration Details

### Vite Configuration
- **Base Path**: Automatically set to `/agritrust/` for production
- **Build Output**: `dist/` directory
- **Assets**: Optimized for GitHub Pages

### Package.json Scripts
- `npm run build:prod` - Build for production with correct base path
- `npm run deploy:prod` - Build and deploy to GitHub Pages
- `npm run deploy` - Deploy existing build

## 📁 Repository Structure
```
agritrust/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── dist/                       # Build output (auto-generated)
├── src/                        # Source code
├── vite.config.ts             # Vite configuration
├── package.json               # Dependencies and scripts
└── DEPLOYMENT.md              # This file
```

## 🌐 GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Set source to "GitHub Actions" or "Deploy from a branch"
4. If using branch deployment, select `gh-pages` branch

### 2. Repository Name
- Make sure your repository name is `agritrust` (lowercase)
- If different, update the base path in `vite.config.ts`

### 3. Custom Domain (Optional)
- Add your domain in the GitHub Pages settings
- Update the `cname` field in `.github/workflows/deploy.yml`

## 🐛 Troubleshooting

### Content Not Showing
1. **Check Base Path**: Ensure it matches your repository name
2. **Clear Cache**: Try hard refresh (Ctrl+F5)
3. **Check Console**: Look for 404 errors in browser dev tools

### Build Errors
1. **TypeScript Errors**: Run `npm run lint` to check
2. **Missing Dependencies**: Run `npm install`
3. **Path Issues**: Verify all imports use relative paths

### Deployment Issues
1. **GitHub Token**: Ensure repository has proper permissions
2. **Branch Name**: Check if using `main` or `master`
3. **Workflow**: Check Actions tab for error details

## 📱 Testing Your Deployment

### Local Testing
```bash
# Build and preview locally
npm run build:prod
npm run preview

# Test with production base path
npm run build
npx serve dist
```

### Production Testing
1. Visit your GitHub Pages URL
2. Test all navigation and functionality
3. Check responsive design on mobile
4. Verify all assets load correctly

## 🔄 Updating Your Site

### Automatic Updates
- Push to `main`/`master` branch
- GitHub Actions will automatically deploy

### Manual Updates
```bash
# Make your changes
git add .
git commit -m "Update AgriTrust application"
git push origin main

# Or deploy manually
npm run deploy:prod
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Minimize Bundle**: Vite automatically optimizes
3. **Cache Headers**: GitHub Pages handles this automatically
4. **CDN**: Consider using a CDN for better performance

## 🛡️ Security Notes

- No sensitive data in the repository
- All API calls should use environment variables
- GitHub Pages serves static files only
- HTTPS is automatically enabled

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Test the build locally first
4. Check browser console for errors

---

**Your AgriTrust application should now be live at:**
`https://[your-username].github.io/agritrust/`
