#!/bin/bash
if [ ! -d "node_modules" ]; then
  npm config set cache /home/node/app/.npm-cache --global
  cd /home/node/app/
  npm install
fi

npm run start:dev