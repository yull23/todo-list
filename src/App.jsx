function App() {
  return (
    <>
      <div>Hello! World!</div>
      <form action="">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
        <button className="btn">Add Todo</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        <li>
          <input type="checkbox" />
          <p>item#1</p>
          <button className="btn">delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <p>item#2</p>
          <button className="btn">delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <p>item#3</p>
          <button className="btn">delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <p>item#4</p>
          <button className="btn">delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <p>item#5</p>
          <button className="btn">delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
