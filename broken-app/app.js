const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const PORT = 3000;

async function getUserInfo(userId) {
  const res = await axios.get(`https://api.github.com/users/${userId}`);
  return res
}

app.get("/", async function(req, res, next) {
  res.send(`<h1>Send Data As { "developers": ["user1", "user2", "user2", ...] }</h1>`)
})

// { "developers": ["joelburton", "elie", "ellie"] }

app.post('/', async function(req, res, next) {

  try {
    const { developers } = req.body;
    const results = await Promise.all(developers.map(async d => {
      const val = await getUserInfo(d);
      return val.data
    }));
    const out = results.map(r => ({ name: r.name, bio: r.bio }));
    return res.send(JSON.stringify(out));
  } 
  catch(err) {    
    next(err);
  }
});

app.listen(PORT, function() {
  console.log(`Alive on port: ${PORT}`)
});
