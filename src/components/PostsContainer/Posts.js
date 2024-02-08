import {Post} from "./Post";
const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};