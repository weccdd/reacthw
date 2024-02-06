const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {title}</div>
            <button onClick={()=>{
                getCurrentPost(post)
            }}>
                <span>Details</span>
            </button>
        </div>
    );
};

export {Post};