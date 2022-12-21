FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /server

COPY ["package.json", "package-lock.json", "secure-connect-forintola.zip", "./"]

RUN npm install --omit=dev

COPY "server.js" "./"

COPY  "src/" "src/"

CMD ["npm", "start"]

EXPOSE 4000




