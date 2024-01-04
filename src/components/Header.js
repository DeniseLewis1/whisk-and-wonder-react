import React from "react";
import { Filter } from "react-feather";

const Header = ({ addIdea, searchIdea, searchText, categories, category, handleCategoryChange }) => {
    const searchInput = (e) => searchIdea(e.target.value);

    return (
        <header>
          <div className="wrapper">
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
              <form className='category-filter'>
                  <Filter />
                  <label htmlFor='category'>Filter Ideas:</label>
                  <select id='category' name='category' value={category} onChange={handleCategoryChange}>
                      {categories.map(category => <option value={category} key={category}>{category}</option>)}
                  </select>
              </form>
            </aside>
          </div>
      </header>
    );
};

export default Header;