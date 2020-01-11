FROM mhart/alpine-node:latest

# install dependencies
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM mhart/alpine-node:slim

WORKDIR /app
COPY --from=0 /app .
COPY . .

EXPOSE 3000
CMD ["node", "__sapper__/build"]