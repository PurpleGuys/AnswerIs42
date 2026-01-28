#!/bin/bash
set -e

echo "=== Answer is 42 - Deployment Script ==="

if [ ! -f .env ]; then
    echo "Error: .env file not found. Copy .env.example to .env and configure it."
    exit 1
fi

source .env

echo "1. Pulling latest changes..."
git pull origin main

echo "2. Building Docker images..."
docker compose build --no-cache

echo "3. Stopping existing containers..."
docker compose down

echo "4. Starting new containers..."
docker compose up -d

echo "5. Waiting for services to be healthy..."
sleep 10

echo "6. Checking service health..."
docker compose ps

echo "7. Running database migrations..."
docker compose exec app npm run db:push || echo "Database migrations skipped or already up to date"

echo "=== Deployment Complete ==="
echo "Application is running at https://answeris42.fr"
