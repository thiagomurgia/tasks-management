FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN yarn install
RUN npm install -g prisma@3
RUN yarn build


EXPOSE 3333

CMD ["yarn", "start:migrate:prod"]