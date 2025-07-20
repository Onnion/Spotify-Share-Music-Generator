FROM node:20-alpine AS builder
WORKDIR /app
COPY packages/spotify-nest/apps/spotify-nest/package*.json ./
RUN npm install
COPY packages/spotify-nest .
RUN npm run build 

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/src/main"]