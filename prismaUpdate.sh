#!/bin/sh

docker compose -p prisma-multidatabase up --build -d

npm run local:migrate -y
sleep 5
npm run local:generate -y
sleep 5

npm run cloud:migrate -y
sleep 5
npm run cloud:generate -y
sleep 5