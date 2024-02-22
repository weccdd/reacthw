import {LoginForm} from "../../components";
import css from './LoginPage.module.css'
const LoginPage = () => {
    return (
        <div className={css.MainLogin}>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};