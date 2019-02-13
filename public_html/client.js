let socket = io.connect();

$('body').on('click', function(event){

  //whats the mouse position when we click on the body?
  console.log(event.clientX, event.clientY);


  $('<div>😎</div>').css('position','absolute').css('top', event.clientY).css('left', event.clientX ).appendTo('body')


    // $('<div>😎</div>').css({
    //   'position': 'absolute',
    //   'top': event.clientY,
    //   'left': event.clientX
    // }).appendTo('body')

    //define a JSON object that contains our data
  let mouseDataToSend = {
    'top' : event.clientY,
    'left' : event.clientX
  }

  // console.log(mouseDataToSend);

  // send the mouse data up to the server so it can relay it to all users!
  socket.emit('addEmoji', mouseDataToSend);

  //listen for incoming messages, and react to them using the mouse data that was send down from the server from any other clinet out there (is there any body out there?)
  socket.on('massSendEmoji', function(recievedMouseData){


    $('<div>😎</div>').css({
      'position': 'absolute',
      'top': recievedMouseData.top,
      'left': recievedMouseData.left
    }).appendTo('body')


      // $('<div>😎</div>').css('position','absolute').css('top', recievedMouseData.top).css('left', recievedMouseData.left ).appendTo('body')



  })





})
