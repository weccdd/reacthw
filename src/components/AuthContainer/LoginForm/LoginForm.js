import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {authService} from "../../../service";
import css from './LoginForm.module.css'

const LoginForm = () => {
    const {handleSubmit, register, }= useForm()
    const [error, setError] = useState(null)
    const navigator = useNavigate()
    const login = async (user) =>{
        try {
            await authService.login(user)
            navigator('/cars')
        }catch (e){
            setError(true)
        }
    }
    return (
        <div className={css.LoginFormBlock}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(login)} className={css.LoginForm}>
                <div className={css.LoginFormText}>Username:</div>
                <input type={"text"} {...register("username")}/>
                <div className={css.LoginFormText}>Password: </div>
                <input type={"text"} {...register("password")}/>
                <div className={css.ButtonLoginForm}>
                    <button>LOGIN</button>
                </div>

                {error && <div className={css.ErrorLoginForm}> Username or password incorrect</div>}
            </form>
        </div>
    );
};

export {LoginForm};