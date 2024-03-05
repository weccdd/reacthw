
import {useForm} from "react-hook-form";
import {carValidator} from "../../../validators";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsService} from "../../../service";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../../store";
import {useEffect} from "react";

const CarsForm = () => {
    const dispatch = useDispatch()

       const {reset,
           register,
           handleSubmit,
           formState : { errors,isValid},
           setValue} =  useForm({

            mode: "all",
            resolver: joiResolver(carValidator)
        })

    const {setCarUpdate} = useSelector(state => state.cars)

    useEffect(() => {
        if(setCarUpdate){
            setValue('brand', setCarUpdate.brand, {shouldValidate: true})
            setValue('price', setCarUpdate.price, {shouldValidate: true})
            setValue('year', setCarUpdate.year, {shouldValidate: true})
        }
    }, [setCarUpdate, setValue])


    const update = async (car) => {
        await carsService.updateById(setCarUpdate.id, car)
        dispatch(carsActions.trigger())
        dispatch(carsActions.setCarUpdate(null))
        reset()
    }
    const save = async (car)=>{
            await carsService.create(car)
        dispatch(carsActions.trigger())
        reset()
    }
    return (
        <form onSubmit={handleSubmit(setCarUpdate? update : save)}>
            <input type={`text`} placeholder={`brand`}  {...register('brand')}/>
            <input type={`number`} placeholder={`year`}  {...register('year', {valueAsNumber: true})}/>
            <input type={`number`} placeholder={`price`} {...register('price', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{setCarUpdate? `UPDATE` : `SAVE`}</button>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
        </form>
    );
};

export {CarsForm};