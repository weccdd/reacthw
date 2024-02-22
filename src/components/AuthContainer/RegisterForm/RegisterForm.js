import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "../../../validators";
import {authService} from "../../../service";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import css from './RegisterForm.module.css'
const RegisterForm = () => {

    const [error, setError] = useState(null)
    const {register, handleSubmit,  formState: {errors, isValid }}
        = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    })
    const navigate = useNavigate()
    const save = async (user) => {
            try{
                await authService.register(user)
                navigate('/login')
            }catch (e){
                setError(true)
            }
    }
    return (
        <div className={css.RegisterFormBlock}>
            <form onSubmit={handleSubmit(save)} className={css.RegisterForm}>
                <div className={css.RegisterFormText}>Username:</div>
                <input type={"text"} {...register("username")}/>
                {errors.username && <div className={css.ErrorRegisterForm}>{errors.username.message}</div>}

                <div className={css.RegisterFormText}>Password: </div>
                <input type={"text"} {...register("password")}/>
                {errors.password && <div className={css.ErrorRegisterForm}>{errors.password.message}</div>}

                <div className={css.RegisterFormText}>Confirm Password:</div>
                <input type={"text"} {...register("re_password")}/>
                {errors.re_password && <div className={css.ErrorRegisterForm}>{errors.re_password.message}</div>}

                <div className={css.ButtonForm}>
                    <button disabled={!isValid}>REGISTER</button>
                </div>

                {error && <div>Username already exists</div>}
            </form>
        </div>
    );
};

export {RegisterForm};