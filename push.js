var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

let vapidKeys = {
  publicKey: 'BAKaqz04obmmh38s-D9L4SIsX0ffKQB0CO1_2L1Pi9zWC8WFTzvoLxaDMhh5EYOaHfuAe8taPGUvR1g438T4e44',
  privateKey: 'tdPEhVahwyUHMkMYSwmWq8emC2XPnEJDMrDWO6yjmyA'
};

push.setVapidDetails('mailto:sunny@wegile.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = 	{
				"endpoint":"https://fcm.googleapis.com/fcm/send/e4R-NvoQY2c:APA91bEEKHYqXUSqCSXERnvGTM-SdxySCoRvywH8CL8-q24LKDhfJnoKuqLeN9Nf3f1MUDKlA83qGnKN9d6wOeezUoqX7szn83igfhP-xbG6y1By-4InRblxcbUFDHDXiLQXEgdrq6HP",
				"expirationTime":null,
				"keys":
					{
						"p256dh":"BHcaN0kcaR2xVNdDP3DUa-QAACAjjvCPYlmhS7dRA5dXNc_NwtUxS24eBaJPUxJY5srcCCX9PrEpKChrpBE2oXc",
						"auth":"s86If51iC2sYm3X6f5NpWw"
					}
			};

push.sendNotification(sub, 'test message');

// console.log('vapidKeys-',vapidKeys)