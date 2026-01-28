# Guide de Déploiement - Answer is 42

Ce guide explique comment déployer le site Answer is 42 sur un serveur Hetzner.

## Prérequis

- Serveur Hetzner (Ubuntu 22.04+ recommandé)
- Docker et Docker Compose installés
- Nom de domaine pointant vers l'IP du serveur
- Accès SSH au serveur

## Configuration Initiale du Serveur

### 1. Connexion au serveur

```bash
ssh root@votre-ip-hetzner
```

### 2. Installation de Docker

```bash
curl -fsSL https://get.docker.com | sh
usermod -aG docker $USER
```

### 3. Installation de Docker Compose

```bash
apt update && apt install -y docker-compose-plugin
```

### 4. Configuration du firewall

```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

## Déploiement de l'Application

### 1. Cloner le repository

```bash
git clone https://github.com/votre-repo/answeris42.git
cd answeris42
```

### 2. Configurer les variables d'environnement

```bash
cp .env.example .env
nano .env
```

Remplissez les valeurs :
- `POSTGRES_PASSWORD` : Mot de passe sécurisé pour PostgreSQL
- `DATABASE_URL` : URL de connexion (mettre le même mot de passe)
- `SMTP_*` : Configuration de votre serveur mail

### 3. Premier déploiement (sans SSL)

```bash
mkdir -p certbot/www certbot/conf
docker compose -f docker-compose.initial.yml up -d
```

### 4. Obtenir les certificats SSL

```bash
chmod +x scripts/*.sh
./scripts/init-ssl.sh
```

### 5. Passer en mode production avec SSL

```bash
docker compose -f docker-compose.initial.yml down
docker compose up -d
```

### 6. Vérifier le déploiement

```bash
docker compose ps
docker compose logs -f
```

## Commandes Utiles

### Voir les logs

```bash
docker compose logs -f app
docker compose logs -f nginx
```

### Redémarrer les services

```bash
docker compose restart
```

### Mettre à jour l'application

```bash
./scripts/deploy.sh
```

### Sauvegarder la base de données

```bash
./scripts/backup-db.sh
```

### Arrêter l'application

```bash
docker compose down
```

## Structure des Fichiers

```
├── Dockerfile              # Image Docker de l'application
├── docker-compose.yml      # Orchestration des services
├── docker-compose.dev.yml  # Configuration développement
├── nginx/
│   └── nginx.conf          # Configuration Nginx
├── scripts/
│   ├── deploy.sh           # Script de déploiement
│   ├── init-ssl.sh         # Configuration SSL
│   └── backup-db.sh        # Sauvegarde base de données
├── certbot/                # Certificats SSL (généré)
└── .env                    # Variables d'environnement
```

## Configuration SMTP

Pour le formulaire de contact, configurez un serveur SMTP. Options recommandées :
- **Mailgun** : Simple et fiable
- **SendGrid** : Gratuit jusqu'à 100 emails/jour
- **Amazon SES** : Économique pour gros volumes

## Maintenance

### Renouvellement SSL

Les certificats se renouvellent automatiquement via le container certbot.

### Mises à jour de sécurité

```bash
docker compose pull
docker compose up -d
```

### Monitoring

Vérifiez régulièrement :
- `https://answeris42.fr/api/health`
- Logs avec `docker compose logs`

## Support

En cas de problème :
1. Vérifiez les logs : `docker compose logs`
2. Vérifiez l'état des containers : `docker compose ps`
3. Redémarrez si nécessaire : `docker compose restart`
