// make express available
const express = require('express');
//turn on express
const app = express();
// make a server to handle TCP connections and use the app (our express instance) to handle endpoints (/) and requests
const server = require('http').Server( app )

// make socket io available
const io = require('socket.io')(server);




//serve out files in our public_html folder
app.use(express.static('public_html'))


//socket == clinet
// io == server
io.on('connection', function(socket){

  //log out the unique identifier for this connection
  console.log(socket.id);

  // message relay
  //listen for a message form any client
  socket.on('addEmoji', function(incomingMouseData){
    //if we got one, send it out (relay it) to all clinets
    io.emit('massSendEmoji', incomingMouseData)


  })



})






// turn on our server so it can recieve requests.
server.listen(3000, function(){
  console.log('app is listening on port 3000!');
  console.log('so cool!');
})
