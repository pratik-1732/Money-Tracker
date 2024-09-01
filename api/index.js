const expess = require("express");
const cors = require("cors");
const app = expess();

const port = 4000;

app.use(cors());
app.use(expess.json());
app.get("/api/test", (req, res) => {
  res.json("testing ok...");
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
