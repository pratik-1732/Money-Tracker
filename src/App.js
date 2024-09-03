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
  return (
    <main>
      {/* page heading */}
      <div className="heading">
        <h1>Pratik Patil</h1>
        <div className="details">
          <h3>
            500.<span>00</span> RS
          </h3>
          <h3>date time</h3>
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
                  <span>RS</span>
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
