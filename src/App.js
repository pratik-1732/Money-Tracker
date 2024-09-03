import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState("");

  useEffect(() => {
    getTransactions().then(setTransactions);
  });
  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + "/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0];
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    }).then((response) => {
      response.json().then((json) => {
        setName("");
        setDescription("");
        setDatetime("");
        console.log("result", json);
      });
    });
  }
  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];
  return (
    <main>
      {/* page heading */}
      <div className="heading">
        <div className="details">
          <h3 className={"remainBalance " + (balance > 0 ? "green" : "red")}>
            <span className="balance">{balance}</span>.
            <span className="fraction">{fraction}</span>{" "}
            <span className="rsspan">₹</span>
          </h3>
        </div>
      </div>
      {/* form for transaction */}
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="INFO"
          ></input>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
          ></input>
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder="description"
          ></input>
        </div>
        <div className="btn">
          <button type="submit">Add New Transaction</button>
        </div>
      </form>

      {/* history of transaction */}
      <div className="history">
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="desc">{transaction.description}</div>
              </div>
              <div className="right">
                <div
                  className={
                    "price-" + (transaction.price > 0 ? "green" : "red")
                  }
                >
                  {transaction.price}
                  <span>₹</span>
                </div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
