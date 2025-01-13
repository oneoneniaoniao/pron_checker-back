# ベースイメージ
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY backend/src ./src
COPY backend/tsconfig.json .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]

