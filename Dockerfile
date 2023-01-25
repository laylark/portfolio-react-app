FROM node:alpine AS build-deps

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build-deps /app/build /usr/share/nginx/html