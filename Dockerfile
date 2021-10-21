# stage1 as builder
FROM node:10-alpine as builder

RUN mkdir /project

COPY . ./project

WORKDIR ./project

# Install the dependencies and make the folder
RUN npm install

# Build the project and copy the files
RUN npm run build

EXPOSE 3000
CMD [ "node", "server.js" ]
