# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ARG PUBLIC_TIPJAR_URL
ARG PUBLIC_CONTACT_EMAIL
ARG PUBLIC_BOOKING_URL
ARG PUBLIC_UMAMI_SRC
ARG PUBLIC_UMAMI_WEBSITE_ID
ARG PUBLIC_NEWSLETTER_ACTION
ENV PUBLIC_TIPJAR_URL=$PUBLIC_TIPJAR_URL \
    PUBLIC_CONTACT_EMAIL=$PUBLIC_CONTACT_EMAIL \
    PUBLIC_BOOKING_URL=$PUBLIC_BOOKING_URL \
    PUBLIC_UMAMI_SRC=$PUBLIC_UMAMI_SRC \
    PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID \
    PUBLIC_NEWSLETTER_ACTION=$PUBLIC_NEWSLETTER_ACTION
RUN pnpm build

FROM node:22-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --spider -q http://localhost:3000/ || exit 1
CMD ["serve", "dist", "-l", "3000", "--no-clipboard"]
