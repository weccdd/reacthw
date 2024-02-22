import css from './Header.module.css'
import {Navigate, NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <h1>CARS</h1>
            </div>
            <div>
                <NavLink to={'login'}>LOGIN</NavLink>
                <NavLink to={'register'}>REGISTER</NavLink>
            </div>
        </div>
    );
};

export {Header};