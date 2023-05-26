// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


//DO NOT SEND MESSAGES AS MY ACCOUNT WILL BE CHARGED
const accountSid = 'xxxxx';
const authToken = 'XXXXX';
// eslint-disable-next-line no-undef
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'Big bestial laugh',
     from: '+18644321795',
     to: '+18643108266'
   })
  .then(message => console.log(message.sid));