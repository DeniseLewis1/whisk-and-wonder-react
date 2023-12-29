import React from 'react';
import { Heart } from "react-feather";

const Idea = ({ idea, deleteIdea, editIdea, updateColor, favoriteIdeas, addFavorite }) => {
    const alreadyFavorite = favoriteIdeas.find(favorite => favorite.id === idea.id);
    const faveStyle = alreadyFavorite ? "#333" : "";

    return (
        <li className="card" style={{background: idea.color}}>
            <input
            type="text"
            placeholder="Name"
            className="idea-name"
            value={idea.name}
            onChange={e => editIdea(idea.id, "name", e.target.value)}
            />
            <textarea
            placeholder="Description..."
            className="idea-description"
            value={idea.description}
            onChange={e => editIdea(idea.id, "description", e.target.value)}
            />
            <span className="idea-delete" onClick={() => {deleteIdea(idea.id)}}>
            X
            </span>
            <input type="color" className="idea-color" value={idea.color} onChange={e => updateColor(idea.id, e.target.value)} />
            <p className="add-favorite" onClick={() => addFavorite(idea.id)}><Heart style={{fill: faveStyle}} /></p>
      </li>
    );
};

export default Idea;