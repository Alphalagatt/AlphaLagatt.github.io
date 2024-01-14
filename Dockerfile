FROM node
WORKDIR /alpha_lagatt_website

COPY package.json /alpha_lagatt_website/package.json

RUN npm install

COPY . /alpha_lagatt_website/

CMD [ "npm", "start" ]