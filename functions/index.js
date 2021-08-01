const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JJOx8GenWTpcYVPiHYmDwNs5073HN4JdeRA0cXQrxvMv9q1ytt3Y07BHSMRErUS4fMDNeZqTkyeTkK4AK6DWziV00kDMLxb1e')

// API

// APP CONFIG
const app = express();
// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
// app.get('/', (req, res) => res.status(200).send("helllo"))
app.post('/payment/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// LISTEN COMMAND
exports.api = functions.https.onRequest(app)