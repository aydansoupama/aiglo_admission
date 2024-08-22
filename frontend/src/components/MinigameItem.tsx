import React from "preact/compat";

interface MinigameItemProps {
    name: string;
    description: string;
}

const MinigameItem: React.FC<MinigameItemProps> = ({ name, description }) => {
    return (
        <div className="minigame-item">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default MinigameItem