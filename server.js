const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();

//app.use(express.static('public')); ~ not sure if needed
app.use(morgan('common'));

const toolTapSort = require('./toolTapSort');
app.use('/toolTapSort', toolTapSort);

//mongoose & database
const {DATABASE_URL, PORT} = require('./config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let server;

// run server function
function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        console.log('An error has occured while trying to connect with the db.');
        return reject(err);
      }
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      console.log(databaseUrl);
    resolve();
  })
  .on('error', err => {
    mongoose.disconnect();
    reject(err);
    console.log(`Database Error`);
    });
  });
});
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();    
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};