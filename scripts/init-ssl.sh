#!/bin/bash
set -e

echo "=== SSL Certificate Setup for answeris42.fr ==="

DOMAIN="answeris42.fr"
EMAIL="contact@answeris42.fr"

if [ ! -d "certbot" ]; then
    mkdir -p certbot/www certbot/conf
fi

echo "Creating temporary nginx config for certificate generation..."
cat > nginx/nginx-temp.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name answeris42.fr www.answeris42.fr;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 200 'OK';
            add_header Content-Type text/plain;
        }
    }
}
EOF

echo "Starting temporary nginx..."
docker run -d --name nginx-temp \
    -p 80:80 \
    -v $(pwd)/nginx/nginx-temp.conf:/etc/nginx/nginx.conf:ro \
    -v $(pwd)/certbot/www:/var/www/certbot \
    nginx:alpine

echo "Requesting SSL certificate..."
docker run --rm \
    -v $(pwd)/certbot/www:/var/www/certbot \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    certbot/certbot certonly --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

echo "Stopping temporary nginx..."
docker stop nginx-temp && docker rm nginx-temp
rm nginx/nginx-temp.conf

echo "=== SSL Setup Complete ==="
echo "Certificates saved to certbot/conf/live/$DOMAIN/"
echo "You can now run: docker compose up -d"
