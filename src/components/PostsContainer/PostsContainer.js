import {useEffect, useState} from "react";
import {postService} from "../../service/postService";
import {PostsForm} from "./PostsForm";
import {Posts} from "./Posts";

const PostsContainer = () => {
        const [posts, setPosts]= useState([])


    useEffect(()=>{
        postService.getAll()
            .then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            <PostsForm setPost={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostsContainer};