

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails
    return (
        <div>
            <div>userID:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {PostDetails};