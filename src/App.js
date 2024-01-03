import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IdeasList from './components/IdeasList';
import Footer from './components/Footer';

function App() {
  const [color, setColor] = useState("#fff"); //randomize
  const defaultColor = "teal";
  const [ideas, setIdeas] = useState(JSON.parse(window.localStorage.getItem("allIdeas")) || [{
    id: Date.now(),
    name: "",
    description: "",
    color: defaultColor,
    doesMatchSearch: true
  }]);
  const [searchText, setSearchText] = useState("");
  const [favoriteIdeas, setFavoriteIdeas] = useState(JSON.parse(window.localStorage.getItem("favoriteIdeas")) || []);
  const [category, setCategory] = useState("All");
  const categories = ["All", "Favorites"];

  useEffect(() => {
    window.localStorage.setItem("allIdeas", JSON.stringify(ideas));
  }, [ideas]);

  useEffect(() => {
    window.localStorage.setItem("favoriteIdeas", JSON.stringify(favoriteIdeas));
  }, [favoriteIdeas]);

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
    const updatedFavoriteIdeas = favoriteIdeas.filter(favorite => favorite.id !== ideaId);
    setIdeas([...updatedIdeas]);
    setFavoriteIdeas([...updatedFavoriteIdeas]);
  };

  const editIdea = (ideaId, updatedKey, updatedValue) => {
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
    updateFavorites(ideaId);
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
    updateFavorites(ideaId);
  };

  const toggleFavorite = (ideaId) => {
    const selectedIdea = ideas.find(idea => idea.id === ideaId);
    const alreadyFavorite = favoriteIdeas.find(favorite => favorite.id === selectedIdea.id);

    if (!alreadyFavorite) {
      setFavoriteIdeas([...favoriteIdeas, selectedIdea]);
    }
    else {
      const updatedFavoriteIdeas = favoriteIdeas.filter(favorite => favorite.id !== ideaId);
      setFavoriteIdeas([...updatedFavoriteIdeas]);
    }
  };

  const updateFavorites = (ideaId) => {
    const selectedIdea = ideas.find(idea => idea.id === ideaId);
    const updatedFavorites = favoriteIdeas.map(favorite => {
      if (favorite.id === ideaId) {
        return selectedIdea;
      } else {
        return favorite;
      }
    });
    setFavoriteIdeas([...updatedFavorites]);
  };

  const handleCategoryChange = (e) => setCategory(e.target.value);

  return (
    <div className="App">
      <Header 
        addIdea={addIdea} 
        searchIdea={searchIdea} 
        searchText={searchText} 
        categories={categories} 
        category={category} 
        handleCategoryChange={handleCategoryChange}
      />
      <IdeasList 
        ideas={category !== "All" ? favoriteIdeas : ideas} 
        deleteIdea={deleteIdea} 
        editIdea={editIdea} 
        updateColor={updateColor} 
        favoriteIdeas={favoriteIdeas} 
        toggleFavorite={toggleFavorite} 
      />
      <Footer />
    </div>
  );
}

export default App;
