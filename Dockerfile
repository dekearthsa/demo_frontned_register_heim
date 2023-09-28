FROM node:20.7-slim
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install -g serve
RUN npm install
RUN npm run build
EXPOSE 9293
CMD ["serve", "-s", "-l", "9293", "./build"]