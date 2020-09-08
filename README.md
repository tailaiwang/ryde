# Welcome to ryde

### Backstory

Staying fit and socializing during quarantine with a virtual workout platform!

Ryde is a workout-tracking platform that allows you and your friends to track your virtual workouts together! Each user will have the ability to create custom workouts, track advanced stats, and maintain their progress with friends through their profiles.

---

### Tech

Ryde is built on the MERN stack, chosen for its clean usage as a JavaScript Web Stack. The frontend utilizes the **Shopify Polaris** React Library, displaying data and profiles for our users. 

### Next Steps

I'll be integrating the Google Maps API to create a tool for users to plan distance workouts.
- E.g: A user will have the ability to generate a half marathon distance run using the streets/paths near their location.

Creating a Spotify integration that allows users to share workout playlists and to listen together during a run.
- E.g: Functioning like a discord music bot, two runners can listen to the same music at the same time without a speaker disrupting those around them 

---

### Quickstart Guide (Development)
- Clone Repo
- cd ryde-api
- npm i && npm start

This project uses concurrently to run both ryde-api and ryde-app at the same time on separate ports. When calling npm start from the api, concurrently will start the app at the same time as well. 

### To exclusively test front-end changes...
- cd ryde-app
- npm i && npm start

The front-end was built using create-react-app, so all react-scripts called from the ryde-app folder will run normally (without concurrently)
