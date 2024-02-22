import {Cars} from "../../components/CarsContainer";
import {CarForm} from "../../components/CarsContainer/CarForm/CarForm";
import css from './CarsPage.module.css'

const CarsPage = () => {
    return (
        <div className={css.CarsPage}>
            <div>
                <CarForm/>
            </div>
            <Cars/>
        </div>
    );
};

export {CarsPage};