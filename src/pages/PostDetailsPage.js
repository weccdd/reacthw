import {useLoaderData} from "react-router-dom";

import {PostsDetails} from "../components/PostComponent/PostsDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostsDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage};