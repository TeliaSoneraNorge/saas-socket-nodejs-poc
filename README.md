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

4. Point your browser to:
```
http://localhost:8443
```


## Environment variables


The environment variables required to run the application are as follows:

- `CLIENT_ID` = `<IDP client id>`
- `CLIENT_SECRET` = `<IDP client secret>`
- `CLIENT_REDIRECT_URL` = `<IDP client redirect URL>`
- `CLIENT_LOGOUT_URL` = `<IDP client logout URL>`
- `IDENTITY_ISSUER` = `<url to IDP>`
- `SESSION_SECRET` = `<something secret>`
- `XQB_URL` = `<XQB API URL>`
