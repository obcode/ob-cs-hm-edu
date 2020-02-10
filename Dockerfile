FROM mhart/alpine-node:latest

# install dependencies
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM mhart/alpine-node:slim

WORKDIR /app
COPY --from=0 /app .
COPY . .

ENV TZ=Europe/Berlin
RUN apk add --no-cache tzdata && \
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000
CMD ["node", "__sapper__/build"]