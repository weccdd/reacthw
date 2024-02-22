import {useForm} from "react-hook-form";
import {carService} from "../../../service";
import {useAppContext} from "../../../hooks/useAppContext";
import css from './CarForm.module.css'

const CarForm = () => {
    const {register,reset,handleSubmit}=useForm()
    const {changeTrigger} = useAppContext();
    const save = async (car)=>{
            await carService.create(car)
        reset()
        changeTrigger()
    }
    return (
        <div className={css.CarFormBlock}>
            <form onSubmit={handleSubmit(save)} className={css.CarForm}>
                    <div className={css.CarFormText}>Brand</div>
                    <input type={"text"} placeholder={"brand"} {...register("brand")}/>

                    <div className={css.CarFormText}>Price</div>
                    <input type={"text"} placeholder={"price"} {...register("price")}/>

                    <div className={css.CarFormText}>Year</div>
                    <input type={"text"} placeholder={"year"} {...register("year")}/>
                    <div className={css.CarFormButton}>
                        <button>SAVE</button>
                    </div>
            </form>
        </div>
    );
};

export {CarForm};