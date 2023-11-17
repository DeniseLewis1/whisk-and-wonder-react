import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Whisk & Wonder</h1>
          <h2>Baking Ideas</h2>
          <aside className="controls">
            <button onClick={() => {}} className="add-new">
              + New Idea
            </button>
            <input
              type="text" 
              placeholder="Type here to search..." 
              className="search" 
              value={""}
              onChange={() => {}}
            />
          </aside>
        </div>
      </header>
      <main>
        <section className="all-ideas">
          <ul className="ideas-list">
            <li className="card">
              <input
                type="text"
                placeholder="Name"
                className="idea-name"
                value={""}
                onChange={() => {}}
              />
              <textarea
                placeholder="Description..."
                className="idea-description"
                value={""}
                onChange={() => {}}
              />
              <span className="idea-delete" onClick={() => {}}>
                X
              </span>
            </li>
          </ul>
        </section>
      </main>
      <footer>&copy; 2023 Whisk & Wonder</footer>
    </div>
  );
}

export default App;
