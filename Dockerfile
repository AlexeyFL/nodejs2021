FROM node:14-alpine3.12

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install -g nodemon

CMD nodemon src/server.ts