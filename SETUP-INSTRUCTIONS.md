# Quick Setup Instructions for Auto-Deployment

Follow these steps to enable automatic deployment to your Lightsail server.

## Step 1: Copy the SSH Key

1. Open the file `.lightsail-ssh-key.pem` in a text editor
2. Copy the ENTIRE contents (including the BEGIN and END lines)

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository: https://github.com/Brend0n/hiroko.design

2. Click on **Settings** (top menu)

3. In the left sidebar, click **Secrets and variables** → **Actions**

4. Click **New repository secret** button

5. Add these THREE secrets one by one:

### Secret 1: LIGHTSAIL_HOST
- Name: `LIGHTSAIL_HOST`
- Value: `51.44.30.17`
- Click **Add secret**

### Secret 2: LIGHTSAIL_USERNAME
- Name: `LIGHTSAIL_USERNAME`
- Value: `bitnami`
- Click **Add secret**

### Secret 3: LIGHTSAIL_SSH_KEY
- Name: `LIGHTSAIL_SSH_KEY`
- Value: (paste the ENTIRE contents from `.lightsail-ssh-key.pem`)
- Click **Add secret**

## Step 3: Commit and Push the Workflow

```bash
git add .github/workflows/deploy.yml
git add DEPLOYMENT.md
git add .gitignore
git commit -m "Add automatic deployment workflow"
git push origin master
```

## Step 4: Delete the Local SSH Key (for security)

```bash
rm .lightsail-ssh-key.pem
```

## Step 5: Test the Deployment

1. Make a small change to any file (e.g., add a comment to index.html)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push origin master
   ```
3. Go to https://github.com/Brend0n/hiroko.design/actions
4. Watch your deployment run!

## That's it!

From now on, every time you push to the master branch, your website will automatically:
- Build using Vite
- Deploy to your Lightsail server
- Restart the web server

You can monitor all deployments in the Actions tab on GitHub.
