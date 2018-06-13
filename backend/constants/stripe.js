const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_zX3EHVQr1ES5NaiUKe1F3K4a'
    : 'sk_test_zX3EHVQr1ES5NaiUKe1F3K4a';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;