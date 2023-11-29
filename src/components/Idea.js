import React from 'react';

const Idea = ({ idea, deleteIdea, editIdea, updateColor }) => {
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
      </li>
    );
};

export default Idea;