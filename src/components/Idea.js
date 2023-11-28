import React, { useState } from 'react';

const Idea = ({ idea, updateColor }) => {
    return (
        <li className="card" style={{background: idea.color}}>
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
            <input type="color" className="idea-color" value={idea.color} onChange={e => updateColor(idea.id, e.target.value)} />
      </li>
    );
};

export default Idea;