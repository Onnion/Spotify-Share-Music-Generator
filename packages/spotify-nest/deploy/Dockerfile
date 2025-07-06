FROM node:20-alpine AS builder
WORKDIR /app
COPY packages/spotify-nest/package*.json ./
RUN npm install
COPY packages/spotify-nest .
RUN npm run build 

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main"]