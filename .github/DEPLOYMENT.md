# Deployment Setup Guide

## Automatic Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/withBricks/bricks-marketing-website-70de0941`
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
4. Click **Save**

### 2. Update the base URL in vite.config.ts (if using custom domain)

**If you're using a custom domain (e.g., yourdomain.com):**
1. Open `vite.config.ts`
2. Change the line:
   ```typescript
   base: mode === "production" ? "/bricks-marketing-website/" : "/",
   ```
   to:
   ```typescript
   base: mode === "production" ? "/" : "/",
   ```

**If you're keeping the GitHub Pages subdirectory URL:**
- Leave it as is. Your site will be at: `https://withbricks.github.io/bricks-marketing-website-70de0941/`

### 3. Set up a custom domain (Optional)

If you want to use your own domain instead of the GitHub Pages URL:

1. Go to your repository → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourdomain.com` or `www.yourdomain.com`)
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **Enforce HTTPS** once DNS is configured

**DNS Configuration:**
Add one of these DNS records with your domain registrar:

- **For apex domain (yourdomain.com):** Add A records pointing to:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

- **For subdomain (www.yourdomain.com):** Add a CNAME record:
  ```
  CNAME: www → withbricks.github.io
  ```

### 4. Test the deployment

1. Commit and push any change to the `main` branch:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```
2. Go to your repository → **Actions** tab
3. Watch the workflow run (takes 1-3 minutes)
4. Once complete (green checkmark), visit your site:
   - GitHub Pages URL: `https://withbricks.github.io/bricks-marketing-website-70de0941/`
   - Or your custom domain if configured

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Click on **Deploy to GitHub Pages**
3. Click **Run workflow**
4. Select the `main` branch and click **Run workflow**

## Troubleshooting

### 404 Error or Blank Page
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the `base` path in `vite.config.ts` matches your deployment URL
- For custom domain, use `base: "/"`. For GitHub subdirectory, use `base: "/repo-name/"`

### Build Failures
- Check the Actions log for specific error messages
- Ensure all dependencies are in `package.json`
- Verify `bun run build` works locally

### Custom Domain Not Working
- Verify DNS records are correctly configured (use `dig yourdomain.com` or `nslookup`)
- DNS changes can take 24-48 hours to propagate
- Make sure you updated the `base` path in `vite.config.ts` to `"/"`
- Check that HTTPS is enforced in GitHub Pages settings

### Website Not Updating
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the Actions tab to confirm deployment succeeded
- GitHub Pages can take 1-2 minutes to update after deployment

## Current Configuration

- **Repository:** withBricks/bricks-marketing-website-70de0941
- **Default URL:** `https://withbricks.github.io/bricks-marketing-website-70de0941/`
- **Base Path:** `/bricks-marketing-website/` (change to `/` for custom domain)
