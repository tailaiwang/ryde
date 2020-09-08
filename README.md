# ryde
Staying fit and socializing during quarantine with a virtual workout platform!


### Quickstart Guide (Development)
- Clone Repo
- cd ryde-api
- npm i && npm start

This project uses concurrently to run both ryde-api and ryde-app at the same time on separate ports. When calling npm start from the api, concurrently will start the app at the same time as well. 

### To exclusively test front-end changes...
- cd ryde-app
- npm i && npm start
