import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;

    const navigate = useNavigate()
    const Characters = () => {
        const id =characters.map(character => character.split('/').slice(-1)[0]).join(',')
        navigate(`/character/${id}`)
        console.log(id);
    }
    return (
        <div className={css.MainEpisode} onClick={Characters}>
        <div>
            <div className={css.Text}>id:{id}</div>
            <div className={css.Text}>name:{name}</div>
            <div className={css.Text}>chapter:{chapter}</div>
        </div>
    </div>


);
};

export {Episode};