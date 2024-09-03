import "./App.css";
import React, { useState } from "react";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

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
        <div className="transaction">
          <div className="left">
            <div className="name">New Phone</div>
            <div className="desc">Bought New I phone</div>
          </div>
          <div className="right">
            <div className="price-red">-400 RS</div>
            <div className="datetime">1-9-2024 10.45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Bonus</div>
            <div className="desc">money return </div>
          </div>
          <div className="right">
            <div className="price-green">+800 RS</div>
            <div className="datetime">1-9-2024 10.45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Phone</div>
            <div className="desc">Bought New I phone</div>
          </div>
          <div className="right">
            <div className="price-red">-400 RS</div>
            <div className="datetime">1-9-2024 10.45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
