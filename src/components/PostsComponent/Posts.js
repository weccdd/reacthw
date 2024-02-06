import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../service/postService";
import {PostDetails} from "../PostDatails/PostDetails";
import css from './Posts.module.css'


const Posts = () => {
    const [posts, setPosts] =useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(()=> {
        postService.getAll()
            .then(({data}) => setPosts(data))
    },[])

    const getCurrentPost = (post)=>{
        setPostDetails(post)
    }

    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            <div>{postDetails !== null && <PostDetails postDetails={postDetails}/>}</div>
        </div>
    );
};

export {Posts};

