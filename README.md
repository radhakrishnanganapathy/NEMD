# NEMD
Here I create a CURD api's using NodeJs, ExpressJS, Mongodb and with docker setup

# curdNodeJSExpress
Create a curd in nodejs , express js with mongodb connection . basic and for beginners.  

# Requirements 
express, mongoose, nodemon, body-parse
# Initiate project
npm init -y

# Install
npm install express --save
npm install nodemon --save-dev - 
npm install body-parser --save
npm install mongoose

# Add on package.json file
"start":"nodemon app.js" inside the Scripts

# Run commend
npm start

# Curd API
Post  - "start":"nodemon app.js" inside the Scripts
body: {
    "name":"",
    "age":,
    "place":"",
    "mobile":,
    "dob":"YYYY-MM-DD"
}
Get - http://localhost:8081/api/curd
Get BY ID - http://localhost:8081/api/curd/:id 
put - http://localhost:8081/api/curd/update/:id 
delete - http://localhost:8081/api/curd/delete/:id 

:id replace to id od data (ex) - http://localhost:8081/api/curd/delete/64be55b04c1597d0d9add41f

# Docker setup
run commend -> docker compose up -d --build or docker compose up -d --build
down commend -> docker compose up -d -- build or docker compose up -d --build

# 2 method of run procuder
First clone the repo
1.npm run -> cd app (go to app folder) and using "npm start" commend
2. in main folder run above docker commend.


