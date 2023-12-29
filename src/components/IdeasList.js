import React from "react";
import Idea from "./Idea";

const IdeasList = ({ ideas, deleteIdea, editIdea, updateColor, favoriteIdeas, addFavorite }) => {
    const matchSearch = (idea) => idea.doesMatchSearch;
    const matches = ideas.filter(matchSearch);
    const renderIdea = (idea) => (
        <Idea
            idea={idea}
            key={idea.id}
            deleteIdea={deleteIdea}
            editIdea={editIdea}
            updateColor={updateColor}
            favoriteIdeas={favoriteIdeas}
            addFavorite={addFavorite}
        />
    );
    const ideaElements = matches.map(renderIdea);

    return (
        <main className="wrapper">
            <div>
            <section className="all-ideas">
                <ul className="ideas-list">{ideaElements}</ul>
            </section>
            </div>
        </main>
    );
};

export default IdeasList;