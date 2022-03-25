FROM node:16.14.0

WORKDIR /software-engineer-backend/src

COPY package*.json ./ 

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "run", "start"]