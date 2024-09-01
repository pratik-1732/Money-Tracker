import "./App.css";

function App() {
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
      <form>
        <div className="basic">
          <input type="text" placeholder="INFO"></input>
          <input type="datetime-local"></input>
        </div>
        <div className="description">
          <input type="text" placeholder="description"></input>
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
