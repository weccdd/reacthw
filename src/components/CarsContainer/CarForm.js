import {useForm} from "react-hook-form";
import {carService} from "../../service";
import {useAppContext} from "../../hooks/useAppContext";

const CarForm = () => {
    const {register,reset,handleSubmit}=useForm()
    const {changeTrigger} = useAppContext();
    const save = async (car)=>{
            await carService.create(car)
        reset()
        changeTrigger()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                    <input type={"text"} placeholder={"brand"} {...register("brand")}/>
                    <input type={"text"} placeholder={"price"} {...register("price")}/>
                    <input type={"text"} placeholder={"year"} {...register("year")}/>
                    <div>
                        <button>SAVE</button>
                    </div>
            </form>
        </div>
    );
};

export {CarForm};