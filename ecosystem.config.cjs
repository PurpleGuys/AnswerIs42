module.exports = {
  apps: [{
    name: 'answeris42',
    script: 'dist/index.cjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};

// Les variables sensibles (SMTP, DATABASE_URL) doivent être dans un fichier .env
// Copiez .env.example en .env et configurez vos valeurs
// Le serveur charge automatiquement le fichier .env au démarrage
