import { useNavigate } from "react-router-dom";

import css from "./user.details.module.css"

const UserDetails = ({ user }) => {
    const { id, name, username, email, website, address: { street, geo, city, suite, zipcode }, company: { name: companyName, bs, catchPhrase } } = user;

    const navigate = useNavigate();

    return (
        <div className={css.UserInfo}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>website: {website}</div>
            <div>street: {street}</div>
            <div>city: {city}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>
            <div>geo: {geo.lat}, {geo.lng}</div>
            <div>company name: {companyName}</div>
            <div>bs: {bs}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <button onClick={() => navigate('posts')}>Get Posts</button>
        </div>
    );
};

export {
    UserDetails
};
