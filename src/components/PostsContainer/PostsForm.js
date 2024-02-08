import {useForm} from "react-hook-form";
import {postService} from "../../service/postService";
const PostsForm = ({setPost}) => {
    const {handleSubmit, register} = useForm()
    const save = async (post)=>{
        const {data} = await postService.create(post)
        setPost(perv => [...perv, data])
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={"title"} {...register('title')}/>
                <input type={"text"} placeholder={"body"} {...register('body')}/>
                <button onSubmit={save}>SAVE</button>
            </form>
        </div>
    );
};

export {PostsForm};