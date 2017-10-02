module.exports = {
	database: 'mongodb://root:abc123@ds141264.mlab.com:41264/amznode',
	port: 8080,
	secretKey: "secret101",

	facebook: {
		clientID: process.env.FACEBOOK_ID || '1416039775177931',
		clientSecret: process.env.FACEBOOK_SECRET || '3c30bd55ef0b61349d0f23f4ead0cc8c',
		profileFields: ['emails', 'displayName'],
		callbackURL: 'http://localhost:8080/auth/facebook/callback'
	}
}