FROM node:16-alpine

WORKDIR /home/schedueler/app

COPY package.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3001

RUN npm run build