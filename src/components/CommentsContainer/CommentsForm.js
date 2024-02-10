import {useForm} from "react-hook-form";
import {commentsService} from "../../service/commentsService";

const CommentsForm = ({setComments}) => {


    const {handleSubmit, register} = useForm()
    const save = async (coment)=>{
        const {data} = await commentsService.create(coment)
        setComments(prev=>[...prev, data])
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={"name"} {...register("name")}/>
                <input type={"text"} placeholder={"email"} {...register("email")}/>
                <input type={"text"} placeholder={"body"} {...register("body")}/>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {CommentsForm};