# Uygulamanın çalışacağı temel sistem
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Uygulamayı başlatan komu
CMD ["npm", "start"]