#!/bin/bash
set -e

echo "=== Answer is 42 - Deployment Script ==="

SERVER_USER="your-username"
SERVER_HOST="your-server.hetzner.com"
SERVER_PATH="/var/www/answeris42"

echo "1. Building application..."
npm run build

echo "2. Creating deployment package..."
mkdir -p deploy-package
cp -r dist deploy-package/
cp package.json deploy-package/
cp package-lock.json deploy-package/
cp ecosystem.config.cjs deploy-package/
cp .htaccess deploy-package/

echo "3. Uploading to server..."
rsync -avz --delete deploy-package/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

echo "4. Installing dependencies on server..."
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && npm ci --only=production"

echo "5. Restarting application..."
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && pm2 restart ecosystem.config.cjs --env production || pm2 start ecosystem.config.cjs --env production"

echo "6. Cleanup..."
rm -rf deploy-package

echo "=== Deployment Complete ==="
echo "Application is running at https://answeris42.fr"
