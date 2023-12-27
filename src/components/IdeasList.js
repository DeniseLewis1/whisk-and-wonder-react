import React from "react";
import Idea from "./Idea";

const IdeasList = ({ ideas, deleteIdea, editIdea, updateColor }) => {
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
    return <ul className="ideas-list">{ideaElements}</ul>;
};

export default IdeasList;