# Guide de Déploiement - Answer is 42

Ce guide explique comment déployer le site Answer is 42 sur un hébergement web Hetzner.

## Prérequis Serveur

- Hébergement Hetzner avec accès SSH
- Node.js 20+ installé
- PM2 installé globalement (`npm install -g pm2`)
- PostgreSQL (ou accès à une base de données externe)

## Configuration Initiale

### 1. Connexion SSH au serveur

```bash
ssh votre-user@votre-serveur.hetzner.com
```

### 2. Installer Node.js (si pas déjà fait)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Installer PM2

```bash
sudo npm install -g pm2
```

### 4. Créer le dossier de l'application

```bash
sudo mkdir -p /var/www/answeris42
sudo chown -R $USER:$USER /var/www/answeris42
```

## Déploiement

### Option A: Déploiement Automatique

1. Configurez le script `deploy.sh` avec vos informations serveur
2. Exécutez:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Option B: Déploiement Manuel

1. **Build local**

```bash
npm run build
```

2. **Upload des fichiers** (via FTP/SFTP)

Uploadez ces fichiers/dossiers vers `/var/www/answeris42/`:
- `dist/` (dossier complet)
- `package.json`
- `package-lock.json`
- `ecosystem.config.cjs`
- `.htaccess`

3. **Installation des dépendances**

```bash
cd /var/www/answeris42
npm ci --only=production
```

4. **Configuration de l'environnement**

Créez le fichier `.env`:

```bash
nano .env
```

Ajoutez vos variables:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/answeris42
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM=contact@answeris42.fr
CONTACT_EMAIL=contact@answeris42.fr
NODE_ENV=production
PORT=5000
```

5. **Lancer l'application**

```bash
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
```

## Configuration Apache/Nginx

### Apache (avec .htaccess)

Le fichier `.htaccess` est inclus et gère:
- Redirection HTTPS
- Proxy vers Node.js (port 5000)
- Headers de sécurité
- Compression gzip
- Cache des assets

Activez les modules Apache nécessaires:

```bash
sudo a2enmod rewrite proxy proxy_http headers expires deflate
sudo systemctl restart apache2
```

### Nginx (alternative)

Si votre hébergement utilise Nginx:

```nginx
server {
    listen 80;
    server_name answeris42.fr www.answeris42.fr;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name answeris42.fr www.answeris42.fr;

    ssl_certificate /etc/ssl/certs/answeris42.fr.crt;
    ssl_certificate_key /etc/ssl/private/answeris42.fr.key;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Commandes Utiles

### Vérifier le statut

```bash
pm2 status
```

### Voir les logs

```bash
pm2 logs answeris42
```

### Redémarrer

```bash
pm2 restart answeris42
```

### Arrêter

```bash
pm2 stop answeris42
```

## Base de Données

### PostgreSQL local

```bash
sudo apt install postgresql
sudo -u postgres createuser answeris42
sudo -u postgres createdb answeris42 -O answeris42
```

### Migrations

```bash
npm run db:push
```

## Monitoring

Vérifiez régulièrement:
- `https://answeris42.fr/api/health`
- Logs PM2: `pm2 logs`
- Statut: `pm2 status`

## SSL/HTTPS

Hetzner webhosting inclut généralement un certificat SSL. Sinon, utilisez Let's Encrypt:

```bash
sudo apt install certbot
sudo certbot certonly --webroot -w /var/www/answeris42 -d answeris42.fr -d www.answeris42.fr
```

## Support

En cas de problème:
1. Vérifiez les logs: `pm2 logs answeris42`
2. Vérifiez le statut: `pm2 status`
3. Redémarrez: `pm2 restart answeris42`
