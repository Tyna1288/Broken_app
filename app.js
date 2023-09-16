const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expressError");



app.use(express.json());




app.post('/', async function(req, res, next) {
  try {
    let promises = req.body.developers.map(developers => 
      axios.get(`https://api.github.com/users/${developers}`)
    );
    
  // wait for all the requests to finish
    let results = await Promise.all(promises);

    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.JSON(out);
  } catch (err) {
    return next(err);
  }
});


/** 404 handler */

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});



module.exports = app




// end generic handler
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
// end app.listen
