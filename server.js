const express = require('express');
const axios = require('axios')
const _server = express();
const authData = require('./auth-service.js');
const clientSessions = require("client-sessions");

const bcrypt = require('bcryptjs');
var mongoose = require("mongoose");

const API_URL = "https://statsapi.web.nhl.com/api/v1";

_server.use(express.static('public'));
_server.use(express.json());

//session middleware
_server.use(clientSessions({
  cookieName: "session", // this is the object name that will be added to 'req'
  secret: "some_random_session", // this should be a long un-guessable string.
  duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
  activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
}));

_server.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

  _server.get('/standings', async (req, res) => {
    try {
        const response = await axios.get(API_URL + '/standings');
        const data = response.data;
        const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
        const origin = req.headers.origin;
        
        if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
      }
  });

  _server.get('/schedule', async (req, res) => {
    try {
        const response = await axios.get(API_URL + '/schedule');
        const data = response.data;
        const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
        const origin = req.headers.origin;
        
        if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
      }
  });
  _server.get('/schedule/:date', async (req, res) => {
  try {
      const response = await axios.get(API_URL + '/schedule?date=' + req.params.date);
      const data = response.data;
      const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
      const origin = req.headers.origin;
      
      if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
      // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
    }
  });
  _server.get('/teams', async (req, res) => {
    try {
        const response = await axios.get(API_URL + '/teams');
        const data = response.data;
        const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
        const origin = req.headers.origin;
        
        if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
      }
  });
  _server.get('/team/:id/roster', async (req, res) => {
    try {
        let response = await axios.get(API_URL + '/teams/' + req.params.id + '/roster');
        const data = response.data.roster;
          for(let i = 0; i < data.length; i++){
            let playerID = data[i].person.id;
            url = ('https://statsapi.web.nhl.com/api/v1/people/' + playerID + '/stats?stats=statsSingleSeason&season=20222023');
            let info = await axios.get(url);
            data[i].stat = info.data.stats[0].splits[0].stat;
          }
          const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
          const origin = req.headers.origin;
          
          if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
          }
          // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
      }
  });
  _server.get('/player/:id/info', async (req, res) => {
    try {
      let  playersInfo = {};
        var playerID = req.params.id;
        let response = await axios.get(API_URL + "/people/" + playerID);
        const data = response.data.people[0];
          playersInfo.fullName = data.fullName;
          playersInfo.primaryNumber = data.primaryNumber;
          playersInfo.birthDate = data.birthDate;
          playersInfo.birthCity = data.birthCity;
          playersInfo.birthCountry = data.birthCountry;
          playersInfo.height = data.height;
          playersInfo.weight = data.weight;
          playersInfo.currentTeam = data.currentTeam.name;
          playersInfo.primaryPosition = data.primaryPosition.name;
          const allowedOrigins = ['https://nhl-stats-portal.netlify.app', 'http://localhost:3000'];
          const origin = req.headers.origin;
          
          if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
          }
          // res.header('Access-Control-Allow-Origin', 'https://nhl-stats-portal.netlify.app');
        res.send(playersInfo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
      }
  });

_server.post("/register", async (req, res) => {
  authData.registerUser(req.body).then((msg) => {
    res.status(201).json({ message: msg });
  }).catch((err) => {
    res.status(409).json({ error: err });
  });
});
 
_server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, 'secret-key');

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  authData.initialize().then(()=>{
    _server.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
  });
