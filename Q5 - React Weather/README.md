# React Weather App

Metaweather API has CORS policy setup to throttle requests coming from Localhosts. To bypass this, I added a cors-anywhere link to the api url. 

On a production version of the app, we can deploy our own cors-anywhere server to heroku to avoid, which will allow app access to ALL users.  
For staging environments, to run this locally, you need to vist https://cors-anywhere.herokuapp.com/ to whitelist your IP for 30 minutes.  

To start the app locally, run: `npm start`
