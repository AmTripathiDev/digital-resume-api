FROM node:18-alpine As base 

WORKDIR /usr/backend-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]