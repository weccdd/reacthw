const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;
    return (
        <div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>

        </div>
    );
};

export {Comment};