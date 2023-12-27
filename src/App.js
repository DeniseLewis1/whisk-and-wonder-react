import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import IdeasList from './components/IdeasList';

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
      <Header addIdea={addIdea} searchIdea={searchIdea} searchText={searchText} />
      <main className="wrapper">
        <div>
          <section className="all-ideas">
              <IdeasList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} updateColor={updateColor} />
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
