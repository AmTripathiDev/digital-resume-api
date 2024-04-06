#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.20.1/bin

cd digital-resume-api
git pull origin master
pm2 kill 
pm2 start src/index.ts


