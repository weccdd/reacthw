import {useNavigate} from "react-router-dom";


import css from "./post.module.css"
const Post = ({post}) => {
    const {id, title} = post;
    console.log(post)
    const navigate = useNavigate()

    return (
        <div>
            <div className={css.Post}>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <button onClick={() => navigate(`${id}`)}>Post Details</button>
            </div>
        </div>
    );
};

export {Post};