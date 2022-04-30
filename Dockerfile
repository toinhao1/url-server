FROM node:15 
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY ./dist .
EXPOSE 8080
CMD ["node", "index.js"]