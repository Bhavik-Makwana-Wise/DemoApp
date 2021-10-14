FROM docker.tw.ee/tw-base-nodejs:14.0

COPY --chown=65534 .env.production crabfile.js next.config.js package.json ./
COPY --chown=65534 .next ./.next
COPY --chown=65534 i18n ./i18n
COPY --chown=65534 node_modules ./node_modules