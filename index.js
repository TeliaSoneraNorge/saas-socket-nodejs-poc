/* Random word generator */
const randomWords = require('random-words');

/* socket part */
const WebSocket = require('ws');
const JWT = '<TAAS-TOKEN-HERE>';
const device = '<XQB-DEVICE-ID-HERE>';
const ws = new WebSocket('wss://ingestion-dev.iot.telia.io/observationsws/ws', {
  headers : {
    token: JWT
  }
});

/* UDP part */
const UDP_PORT = 33333;
const UDP_HOST = '176.34.136.22';
const dgram = require('dgram');
const UDPclient = dgram.createSocket('udp4');


ws.on('open', () => {
  console.log('connected');
  ws.send(`subscribe device ${device} ${JWT}`);
});

ws.on('close', () => {
  console.log('disconnected');
});

ws.on('message', (data) => {
  console.log(data);

  if(data === 'subscribed') {
    setInterval(() => {
      sendUDPMessage()
    }, 3000);
  }

  if(data === 'unauthorized') {
    UDPclient.close();
    ws.close();
  }
});

function sendUDPMessage() {
  let message = {
    deviceId: device,
    timestamp: '',
    payload: ''
  };

  //sets the date
  message.timestamp = new Date();
  
  //generates a random number between 20 and 30
  //message.payload = (Math.floor(Math.random()*(30-20+1)+20)).toString(); 

  //generates a random word combination
  message.payload = randomWords({ exactly: 3, join: '-' });

  UDPclient.send(JSON.stringify(message), 0, JSON.stringify(message).length, UDP_PORT, UDP_HOST, (err, bytes) => {
      if (err) {
        throw err;
      }
      
      console.log('UDP message sent to ' + UDP_HOST +':'+ UDP_PORT + ' @ ' + message.timestamp);
  });
}