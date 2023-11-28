import React, { useState } from 'react';

const Idea = () => {
    const [color, setColor] = useState("teal"); //randomize

    return (
        <li className="card" style={{background: color}}>
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
            <input type="color" className="idea-color" value={color} onChange={e => setColor(e.target.value)} />
      </li>
    );
};

export default Idea;