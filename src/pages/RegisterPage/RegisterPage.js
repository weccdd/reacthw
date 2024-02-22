import {RegisterForm} from "../../components";
import css from './RegisterPage.module.css'

const RegisterPage = () => {
    return (
        < div className={css.MainRegister}>
            <RegisterForm/>
        </div>
    );
};

export {RegisterPage};