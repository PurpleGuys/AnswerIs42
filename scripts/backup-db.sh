#!/bin/bash
set -e

BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/answeris42_$TIMESTAMP.sql.gz"

mkdir -p $BACKUP_DIR

echo "Creating database backup..."
docker compose exec -T db pg_dump -U answeris42 answeris42 | gzip > $BACKUP_FILE

echo "Backup created: $BACKUP_FILE"

find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete
echo "Old backups (>30 days) cleaned up"
