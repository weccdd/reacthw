import {useEffect, useState} from "react";
import {carService} from "../../../service";
import {Car} from "../Car/Car";
import {useAppContext} from "../../../hooks/useAppContext";
import {useSearchParams} from "react-router-dom";
import css from './Cars.module.css'

const Cars = () => {
        const [cars, setCars] = useState([])
        const {trigger} = useAppContext();
        const [query, setQuery] = useSearchParams({page: `1`})
        const [prevNext ,setPrevNext] = useState({prev: null, next:null});


        useEffect(() => {
            carService.getAll(query.get(`page`)).then(({data}) => {
                setCars(data.items)
                setPrevNext({prev: data.prev, next: data.next})
            })

            }, [trigger, query.get('page')])

        const prev = () => {
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
            <div className={css.CarsMain}>
                <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
                </div>
                < div className={css.ButtonCars}>
                    <button disabled={!prevNext.prev} onClick={prev}>PREV</button>
                    <button disabled={!prevNext.next} onClick={next}>NEXT</button>
                </div>
            </div>
        );
};

export {Cars};