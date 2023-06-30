import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail () {

    const [character, setCharacter] = useState({});


    const { id } = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id])

    return (
        <>
            <div>
                <h4>{character.name}</h4>
                <h4>{character.status}</h4>
                <h4>{character.species}</h4>
                <h4>{character.gender}</h4>
                <img src={character.image} alt={character.name} />
            </div>
        </>
    )
}