const stripe = require('stripe')('sk_test_51KgxgXAwYUWZQRKs59Q3isoUkxeOX7NHeN8xK3Wv5VYvOE6pwEWjkmcVEdnLRN5e6bscp4kje3e1lTMua1ivQw7J00VZTndH6r');
// const product = stripe.products.create({
//   name: 'Test Product',
//   default_price_data: {
//     unit_amount: 1000,
//     currency: 'usd',
//     recurring: {
//       interval: 'month',
//     },
//   },
//   expand: ['default_price'],
// });

// // This is your test secret API key.
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));