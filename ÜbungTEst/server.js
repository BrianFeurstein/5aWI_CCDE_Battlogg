const express = require('express');
const router = express.Router();

// App
const app = express();
var os = require('os');



router.get('/info', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip); // ip address of the user
    console.log("Platform: " + os.platform());
    console.log("Architecture: " + os.arch());
    console.log("Hostname: " + os.hostname());
  });


  app.use('/', router);
  app.listen(8080);
