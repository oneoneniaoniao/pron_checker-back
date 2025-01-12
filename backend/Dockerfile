FROM node:18

WORKDIR /usr/src/app

# package.json と package-lock.json を先にコピー
COPY package*.json ./
RUN npm install

# ソースコードと tsconfig をコピー
COPY tsconfig.json ./
COPY src ./src

# ビルド（ts -> jsへコンパイル）
RUN npm run build || npx tsc
EXPOSE 3001
CMD ["npm", "start"]
