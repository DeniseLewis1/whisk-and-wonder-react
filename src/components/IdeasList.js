import React from "react";
import Idea from "./Idea";

const IdeasList = ({ ideas, deleteIdea, editIdea, updateColor, favoriteIdeas, toggleFavorite }) => {
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
            toggleFavorite={toggleFavorite}
        />
    );
    const ideaElements = matches.map(renderIdea);

    return (
        <main>
            <div className="wrapper">
                <section className="all-ideas">
                    <ul className="ideas-list">{ideaElements}</ul>
                </section>
            </div>
        </main>
    );
};

export default IdeasList;