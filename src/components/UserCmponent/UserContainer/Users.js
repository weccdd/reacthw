
import {useLoaderData} from "react-router-dom";
import css from "./user.module.css"
import {User} from "../User";

const Users = () => {
    const {data: users} = useLoaderData()
    return (
        <div className={css.UserMain}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};