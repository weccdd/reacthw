import {Cars} from "../components/CarsContainer";
import {CarForm} from "../components/CarsContainer/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};