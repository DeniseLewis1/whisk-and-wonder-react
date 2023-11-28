import './App.css';
import React, { useState } from 'react';

function App() {
  const [ideas, setIdeas] = useState([{
    id: Date.now(),
    name: "",
    description: "",
    doesMatchSearch: true
  }])
  const [color, setColor] = useState("teal"); //randomize

  const addIdea = () => {
    const newIdea = {
      id: Date.now(),
      name: "",
      description: "",
      doesMatchSearch: true
    };
    setIdeas([newIdea, ...ideas]);
  };

  return (
    <div className="App">
      <header className="wrapper">
        <div>
          <h1 className="title">Whisk & Wonder</h1>
          <h2>Baking Ideas</h2>
          <aside className="controls">
            <button onClick={addIdea} className="add-new">
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
      <main className="wrapper">
        <div>
          <section className="all-ideas">
            <ul className="ideas-list">
              <li className="card" style={{background: color}}>
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
                <input type="color" className="idea-color" value={color} onChange={e => setColor(e.target.value)} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="wrapper">
        <div>&copy; 2023 Whisk & Wonder</div>
      </footer>
    </div>
  );
}

export default App;
