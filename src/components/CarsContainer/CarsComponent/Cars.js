import {useDispatch} from "react-redux";
import {carsActions} from "../../../store";
import {carsService} from "../../../service";

const Cars = ({car}) => {

    const{id, brand, price ,year} = car

    const dispatch = useDispatch()

    const deleteCar = async () =>{
        await carsService.deleteById(id)
        dispatch(carsActions.trigger())
    }
    return (
        <div>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=> dispatch(carsActions.setCarUpdate(car))}>UPDATE</button>
            <button onClick={deleteCar}>DELETE</button>
        </div>
    );
};

export {Cars};