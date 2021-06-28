FROM node:14.17.0

LABEL maintainer="lyhper@gmail.com"

WORKDIR /usr/local/services/next-template

EXPOSE 3000

RUN npm i && npm run build

COPY . .

CMD [ "npm", "start" ]
