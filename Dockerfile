FROM node:12-slim
COPY . /app
WORKDIR /app
CMD node /app/main.js