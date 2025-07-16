FROM n8nio/n8n:latest

USER root

RUN command -v pnpm >/dev/null 2>&1 || npm install -g pnpm --unsafe-perm

USER node
