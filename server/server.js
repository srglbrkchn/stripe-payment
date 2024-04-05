require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

storeItems = new Map([
  [1, { priceInCents: 1000, name: "Learn React Today" }],
  [2, { priceInCents: 2000, name: "Learn CSS Today" }],
]);

app.post("/create-checkout-session", (req, res) => {
  res.json({ url: "Hi" });
});

app.listen(3000);
