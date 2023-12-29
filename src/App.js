import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IdeasList from './components/IdeasList';
import Footer from './components/Footer';

function App() {
  const [color, setColor] = useState("#fff"); //randomize
  const defaultColor = "teal";
  const [ideas, setIdeas] = useState(JSON.parse(window.localStorage.getItem("savedIdeas")) || [{
    id: Date.now(),
    name: "",
    description: "",
    color: defaultColor,
    doesMatchSearch: true
  }]);
  const [searchText, setSearchText] = useState("");
  const [favoriteIdeas, setFavoriteIdeas] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("savedIdeas", JSON.stringify(ideas));
  }, [ideas]);

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

  const addFavorite = (ideaId) => {
    const selectedIdea = ideas.find(idea => idea.id === ideaId);
    setFavoriteIdeas([...favoriteIdeas, selectedIdea]);
  };

  return (
    <div className="App">
      <Header 
        addIdea={addIdea} 
        searchIdea={searchIdea} 
        searchText={searchText} 
      />
      <IdeasList 
        ideas={ideas} 
        deleteIdea={deleteIdea} 
        editIdea={editIdea} 
        updateColor={updateColor} 
        favoriteIdeas={favoriteIdeas} 
        addFavorite={addFavorite} 
      />
      <Footer />
    </div>
  );
}

export default App;
