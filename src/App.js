import './App.css';
import React, { useState } from 'react';
import Idea from './components/Idea';

function App() {
  const [ideas, setIdeas] = useState([{
    id: Date.now(),
    name: "",
    description: "",
    doesMatchSearch: true
  }])

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
              <Idea />
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
