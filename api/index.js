const expess = require("express");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction.js");
const { default: mongoose } = require("mongoose");
const app = expess();

const port = 4000;

app.use(cors());
app.use(expess.json());
app.get("/api/test", (req, res) => {
  res.json("testing ok...");
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    datetime,
    price,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = Transaction.find();
  res.json(transactions);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
