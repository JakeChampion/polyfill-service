FROM node:8.4.0-slim

ENV NODE_ENV=production \
    ENABLE_ACCESS_LOG=true

RUN apt-get update && \
    apt-get install -y git-core python build-essential && \
    apt-get clean

WORKDIR /app

ADD package.json package-lock.json /app/
RUN npm install --silent --production && npm cache verify

ADD bin/ /app/bin/
ADD lib/ /app/lib/
ADD polyfills/ /app/polyfills/
ADD service/ /app/service/
ADD tasks/ /app/tasks/
ADD test/ /app/test/
ADD docs/ /app/docs/
ADD about.json /app/

RUN npm run build

ENTRYPOINT ["npm"]
CMD ["start"]
