import React from "react";

const Header = ({ addIdea, searchIdea, searchText }) => {
    const searchInput = (e) => searchIdea(e.target.value);

    return (
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
    );
};

export default Header;