var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

let vapidKeys = {
  publicKey: 'BAKaqz04obmmh38s-D9L4SIsX0ffKQB0CO1_2L1Pi9zWC8WFTzvoLxaDMhh5EYOaHfuAe8taPGUvR1g438T4e44',
  privateKey: 'tdPEhVahwyUHMkMYSwmWq8emC2XPnEJDMrDWO6yjmyA'
};

push.setVapidDetails('mailto:sunny@wegile.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.setNotification(sub, 'test message');

console.log('vapidKeys-',vapidKeys)