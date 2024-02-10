import {useEffect, useState} from "react";
import {commentsService} from "../../service/commentsService";
import {CommentsForm} from "./CommentsForm";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll()
            .then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};