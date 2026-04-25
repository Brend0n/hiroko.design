# Deployment Setup for hiroko.design

This repository is configured for automatic deployment to AWS Lightsail server "Node-js-2" whenever changes are pushed to the `master` branch.

## Server Details

- **Server**: Node-js-2 (AWS Lightsail)
- **IP Address**: {{LIGHTSAIL_HOST}}
- **Region**: eu-west-3 (Paris)
- **Username**: bitnami
- **Deployment Path**: /home/bitnami/htdocs/hiroko.design

## GitHub Actions Setup

### Required GitHub Secrets

To enable automatic deployment, add the following secrets to your GitHub repository:

1. Go to GitHub repository: https://github.com/Brend0n/hiroko.design
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of the following:

#### LIGHTSAIL_HOST
```
{{LIGHTSAIL_HOST}}
```

#### LIGHTSAIL_USERNAME
```
bitnami
```

#### LIGHTSAIL_SSH_KEY
Copy the contents of `.lightsail-ssh-key.pem` file (the private key):
```
-----BEGIN PRIVATE KEY-----
{{LIGHTSAIL_SSH_KEY}}
-----END PRIVATE KEY-----
```

**IMPORTANT**: Delete the `.lightsail-ssh-key.pem` file after copying the key to GitHub:
```bash
rm .lightsail-ssh-key.pem
```

## How It Works

1. **Push to master**: Any commit pushed to the `master` branch triggers the deployment
2. **Build**: GitHub Actions runs `yarn install` and `yarn build`
3. **Deploy**: Built files from `dist/` folder are copied to the Lightsail server
4. **Restart**: Web server is restarted to serve the new files

## Manual Deployment

If you need to deploy manually:

```bash
# Build locally
yarn build

# Deploy via SCP
scp -i ~/.ssh/lightsail-key.pem -r dist/* bitnami@{{LIGHTSAIL_HOST}}:/home/bitnami/htdocs/hiroko.design/

# SSH into server and restart
ssh -i ~/.ssh/lightsail-key.pem bitnami@{{LIGHTSAIL_HOST}}
cd /home/bitnami/htdocs/hiroko.design
sudo systemctl reload nginx
```

## Testing the Deployment

1. Make a small change to any file
2. Commit and push to master:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin master
   ```
3. Go to GitHub → Actions tab to watch the deployment progress
4. Visit https://hiroko.design to see the changes

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs for error messages
- Verify all secrets are correctly set in GitHub
- Ensure the SSH key has proper permissions on the server

### Website not updating
- Clear browser cache
- Check if the build completed successfully in GitHub Actions
- SSH into server and verify files were updated:
  ```bash
  ssh -i ~/.ssh/lightsail-key.pem bitnami@{{LIGHTSAIL_HOST}}
  ls -la /home/bitnami/htdocs/hiroko.design
  ```

### Need to change deployment path
Edit `.github/workflows/deploy.yml` and update the `target` path in the "Deploy to Lightsail" step.

## Security Notes

- The SSH private key is stored as a GitHub secret (encrypted)
- Never commit `.lightsail-ssh-key.pem` to the repository
- The key file is already added to `.gitignore`
