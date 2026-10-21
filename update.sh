#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "==> git pull"
git pull --ff-only

# Keep the running image tagged so prune can't remove it. Rollback:
#   docker tag jordanmaulana-blog:previous jordanmaulana-blog:latest && docker compose up -d --no-build
echo "==> tag current image as previous"
docker tag jordanmaulana-blog:latest jordanmaulana-blog:previous 2>/dev/null || true

echo "==> docker compose build"
docker compose build

# --wait fails on unhealthy container, so prune below is skipped.
echo "==> docker compose up -d --wait"
docker compose up -d --wait

echo "==> prune this project's dangling images"
docker image prune -f --filter label=com.docker.compose.service=jordanmaulana-blog

echo "==> done"
docker compose ps
