import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import css from "./Episodes.module.css";
import {Episode} from "../../components/Episodes/Episode";
import {episodesService} from "../../service/episodesService";

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([])

    const [query, setQuery] = useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev: null, next: null})


    useEffect(()=> {
        episodesService.getAll(query.get('page'))
            .then(({data}) =>{
                setEpisodes(data.results)
                setPrevNext({prev: data.info.prev, next: data.info.next})

            })
    },[query.get('page')])
    const prev = ()=> {
        setQuery(prev => {
            prev.set('page', (+prev.get('page')-1).toString())
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page')+1).toString())
            return prev
        })
    }
    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id}  episode={episode}/>)}
            <div className={css.Episodes_Button}>
                <button disabled={!prevNext.prev} onClick={prev}>Prev</button>
                <button disabled={!prevNext.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export {EpisodePage};