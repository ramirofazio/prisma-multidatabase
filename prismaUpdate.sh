#!/bin/sh

npm run local:migrate -y
sleep 5
npm run local:generate -y
sleep 5

npm run cloud:migrate -y
sleep 5
npm run cloud:generate -y
sleep 5