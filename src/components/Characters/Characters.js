import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {CharactersService} from "../../service/charactesService";
import {Character} from "./Character";
import css from './Characters.module.css'

const Characters = () => {
    const {id}= useParams()
    const [characters, setCharacters] = useState([])
    console.log(characters);

    useEffect(() => {
        CharactersService.getById(id)
            .then(({data}) => setCharacters(data))
    }, [id])
    return (
        <div className={css.Characters}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};