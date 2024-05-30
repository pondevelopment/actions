FROM node:19-alpine3.17

WORKDIR /

RUN apk add --no-cache jq bash git

COPY . .

RUN npm install

RUN chmod +x /entrypoint.sh
RUN mkdir -p /.cache/md
RUN chmod 777 /.cache/md

ENTRYPOINT ["/entrypoint.sh"]