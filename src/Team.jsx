import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px',
    }

    const playerAdd = () =>{
        const newPlayer = team + 1;
        setTeam(newPlayer);
    }
    const removePlayer = () =>{
        setTeam (team - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <button onClick={playerAdd}>Add Player</button>
                <button onClick={removePlayer}>Remove Player</button>
            </div>
        </div>
    )
}