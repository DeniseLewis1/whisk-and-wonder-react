import './App.css';
import React, { useState } from 'react';
import Idea from './components/Idea';

function App() {
  const [color, setColor] = useState("#fff"); //randomize
  const defaultColor = "teal";

  const [ideas, setIdeas] = useState([{
    id: Date.now(),
    name: "",
    description: "",
    color: defaultColor,
    doesMatchSearch: true
  }]);

  const [searchText, setSearchText] = useState("");

  const addIdea = () => {
    const newIdea = {
      id: Date.now(),
      name: "",
      description: "",
      color: defaultColor,
      doesMatchSearch: true
    };
    setIdeas([newIdea, ...ideas]);
  };

  const deleteIdea = (ideaId) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== ideaId);
    setIdeas([...updatedIdeas]);
  };

  const editIdea = (ideaId, updatedKey, updatedValue) => {
    console.log(updatedValue);
    const updatedIdeas = ideas.map(idea => {
      if (idea.id !== ideaId) {
        return idea;
      } else {
        if (updatedKey === "name") {
          idea.name = updatedValue;
          return idea;
        } else {
          idea.description = updatedValue;
          return idea;
        }
      }
    });

    setIdeas([...updatedIdeas]);
  };

  const searchIdea = (text) => {
    const newSearchText = text.toLowerCase();

    const updatedIdeas = ideas.map((idea) => {
      if (!newSearchText) {
        idea.doesMatchSearch = true;
        return idea;
      } else {
        idea.doesMatchSearch =
          idea.name.toLowerCase().includes(newSearchText) ||
          idea.description.toLowerCase().includes(newSearchText);
        return idea;
      }
    });
    setIdeas([...updatedIdeas]);
    setSearchText(newSearchText);
  };

  const searchInput = (e) => searchIdea(e.target.value);

  const notesList = () => {
    const matchSearch = (idea) => idea.doesMatchSearch;
    const matches = ideas.filter(matchSearch);
    const renderIdea = (idea) => (
      <Idea
        idea={idea}
        key={idea.id}
        deleteIdea={deleteIdea}
        editIdea={editIdea}
        updateColor={updateColor}
      />
    );
    const ideaElements = matches.map(renderIdea);
    /*return <ul className="ideas-list">{ideaElements}</ul>;*/
    return ideaElements;
  };

  const updateColor = (ideaId, newColor) => {
    const updatedIdeas = ideas.map(idea => {
      if (idea.id === ideaId) {
        idea.color = newColor;
        setColor(newColor);
        return idea;
      } else {
        return idea;
      }
    });
    setIdeas([...updatedIdeas]);
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
              value={searchText}
              onChange={searchInput}
            />
          </aside>
        </div>
      </header>
      <main className="wrapper">
        <div>
          <section className="all-ideas">
            <ul className="ideas-list">
              {/* {ideas.map((idea, index) => <Idea key={index} idea={idea} deleteIdea={deleteIdea} editIdea={editIdea} updateColor={updateColor} />)} */}
              {notesList()}
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
