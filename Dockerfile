FROM node:11-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn --frozen-lockfile

COPY . /usr/src/app/
RUN  yarn build

EXPOSE 1234
CMD yarn start
