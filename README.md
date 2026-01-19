# Rohit Khapre - DevOps Portfolio

Welcome to my DevOps portfolio website hosted on GitHub Pages.

## 🚀 Live Site

Visit the live portfolio at: [https://rohitkhapre.github.io](https://rohitkhapre.github.io)

## 🛠️ Technologies Used

This portfolio is built with:

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn-ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📦 Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:

1. **Triggers automatically** on:
   - Every push to the `main` branch
   - Manual workflow dispatch (via GitHub Actions tab)

2. **Build Process**:
   - Checks out the repository code
   - Sets up Node.js 20 with npm caching
   - Installs dependencies using `npm ci`
   - Builds the project using `npm run build`
   - Uploads the `dist` folder as a GitHub Pages artifact

3. **Deployment**:
   - Deploys the built artifacts to GitHub Pages
   - Site becomes available at `https://rohitkhapre.github.io`

### Setup Instructions

To enable GitHub Pages deployment:

1. Go to your repository: `https://github.com/Rohitkhapre/rohitkhapre.github.io`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. The workflow will automatically run on the next push to `main`

### Workflow Details

```yaml
- Workflow Name: Deploy to GitHub Pages
- Trigger: Push to main branch or manual dispatch
- Build Environment: Ubuntu Latest
- Node Version: 20
- Build Output: ./dist directory
- Deployment: GitHub Pages
```

### Manual Deployment

You can also manually trigger the deployment:

1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Monitoring Deployments

- View deployment status in the **Actions** tab
- Check deployment logs for any build errors
- Each successful deployment creates a new GitHub Pages deployment

### Troubleshooting

**Build fails:**
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Review build logs in the Actions tab

**Site not updating:**
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check if the workflow completed successfully
- Clear browser cache or try incognito mode

**404 errors:**
- Verify `vite.config.ts` has `base: "/"` configured
- Ensure `.nojekyll` file exists in the repository root

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg             # Custom favicon
├── src/
│   ├── components/            # React components
│   ├── pages/                 # Page components
│   └── lib/                   # Utility functions
├── index.html                 # HTML entry point
├── vite.config.ts            # Vite configuration
└── package.json               # Dependencies
```

## 📝 License

This project is private and personal portfolio.

## 🔗 Links

- **Portfolio**: [https://rohitkhapre.github.io](https://rohitkhapre.github.io)
- **GitHub**: [@Rohitkhapre](https://github.com/Rohitkhapre)
- **LinkedIn**: [rohit-khapre](https://linkedin.com/in/rohit-khapre)
