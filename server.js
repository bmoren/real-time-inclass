// make express available
const express = require('express');
// make socket io available
const io = require('socket.io');
//turn on express
const app = express();
// make a server to handle TCP connections and use the app (our express instance) to handle endpoints (/) and requests
const server = require('http').Server( app )

//serve out files in our public_html folder
app.use(express.static('public_html'))

// turn on our server so it can recieve requests.
server.listen(3000, function(){
  console.log('app is listening on port 3000!');
  console.log('so cool!');
})
