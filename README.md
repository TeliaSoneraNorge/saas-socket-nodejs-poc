# xqb-socket-getting-started 
Simple NodeJS app which allows to subscribe to an XQB stream (device) and publish some random data


## Info

This little PoC application can be started locally and allow testing XQB stream(s). 

The application is based on authentication against TaaS, and the device created in XQB will be connected to the SUB id present in the Access Token.



## Setup


> Prerequisite:
> 
> - install [Node.js](https://nodejs.org/en/download/)
> - install [npm](https://docs.npmjs.com/getting-started/installing-node)

1. Install
``` 
$ npm install 
``` 

2. In ```index.js```

> Make sure to fill in the variables with the correct values.

3. Start application
```
$ npm start
```

4. Watch the random words being read from your device stream in the console.


Note: You can switch between random words or random numbers, by (un)commenting the following lines in `index.js`:
> 56: message.payload = (Math.floor(Math.random()*(30-20+1)+20)).toString(); 

> 59: message.payload = randomWords({ exactly: 3, join: '-' });