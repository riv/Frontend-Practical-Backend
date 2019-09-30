Steps to get it running on the web

1. install ngrok

$ npm install ngrok -g

2. start up the containers

$ make build && make run

3. share the connection with ngrok

$ ngrok http 3000
