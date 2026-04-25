#!/bin/bash

# Script to help setup GitHub Secrets for automatic deployment
# This script uses GitHub CLI (gh) to add secrets

echo "========================================="
echo "GitHub Secrets Setup for Auto-Deployment"
echo "========================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Install it with: brew install gh"
    echo ""
    echo "Alternatively, add secrets manually at:"
    echo "https://github.com/Brend0n/hiroko.design/settings/secrets/actions"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "You need to authenticate with GitHub CLI first."
    echo "Run: gh auth login"
    exit 1
fi

echo "Setting up secrets for repository: Brend0n/hiroko.design"
echo ""

# Set LIGHTSAIL_HOST
echo "Setting LIGHTSAIL_HOST..."
echo "51.44.30.17" | gh secret set LIGHTSAIL_HOST -R Brend0n/hiroko.design

# Set LIGHTSAIL_USERNAME
echo "Setting LIGHTSAIL_USERNAME..."
echo "bitnami" | gh secret set LIGHTSAIL_USERNAME -R Brend0n/hiroko.design

# Set LIGHTSAIL_SSH_KEY
echo "Setting LIGHTSAIL_SSH_KEY..."
if [ -f ".lightsail-ssh-key.pem" ]; then
    gh secret set LIGHTSAIL_SSH_KEY -R Brend0n/hiroko.design < .lightsail-ssh-key.pem
    echo ""
    echo "All secrets have been set successfully!"
    echo ""
    echo "For security, you should now delete the local SSH key file:"
    echo "  rm .lightsail-ssh-key.pem"
else
    echo "Error: .lightsail-ssh-key.pem file not found!"
    echo "Cannot set LIGHTSAIL_SSH_KEY secret."
    exit 1
fi

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "You can now push to master branch and the site will auto-deploy."
echo "Monitor deployments at: https://github.com/Brend0n/hiroko.design/actions"
echo ""
