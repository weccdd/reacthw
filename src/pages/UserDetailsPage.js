import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../service/userService";
import {UserDetails} from "../components/UserCmponent/UserDetailsContainer/UserDetails";

const UserDetailsPage = () => {
    const {userid} = useParams();
    const [user, serUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            serUser(state.user)
        } else {
            userService.getById(userid).then(({data}) => serUser(data))
        }
    }, [userid]);
    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};