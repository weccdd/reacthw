import {useEffect} from "react";
import {carsService} from "../../service";
import {Cars, CarsForm} from "../../components/CarsContainer";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../store";

const CarsPage = () => {
    const dispatch = useDispatch();

    const {cars, trigger} = useSelector(state => state.cars)

    console.log(cars);

    useEffect(() => {
        carsService.getAll()
            .then(({data}) => dispatch(carsActions.setResponse(data)))
    }, [trigger, dispatch])

    return (
        <div>
            <CarsForm/>
            {cars.map(car => <Cars key={car.id} car={car}/>)}
         </div>
    );
};

export {CarsPage};