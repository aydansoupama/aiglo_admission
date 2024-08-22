import { useEffect, useState } from "preact/hooks";
import MinigameItem from "./MinigameItem"
import axios, { AxiosResponse } from "axios";

const MinigameList = () => {
    const [minigames, setMinigames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/minigames')
            .then((response: AxiosResponse<any, any>): void => {
                setMinigames(response.data);
            })
            .catch((error: Error): void => {
                console.error('Erreur lors de la récupération des mini-jeux:', error);
            });
    }, []);

    return (
        <div className="minigame-list">
            <h2>Liste des mini-jeux</h2>
            {minigames.map((minigame: any) => (
                <MinigameItem key={minigame.id} name={minigame.name} description={minigame.description} />
            ))}
        </div>
    )
}

export default MinigameList