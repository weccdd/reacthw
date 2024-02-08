import {useForm} from "react-hook-form";
import {post} from "axios";
import {userService} from "../../service/userService";

const UserForm = ({setUsers}) => {
    const{reset, handleSubmit, register}= useForm()
    const save = async (user)=>{
        const {data} = await userService.create(user)
        setUsers(prev=>[...prev, data])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'text'} placeholder={'email'} {...register('email')}/>
            <button>SAVE</button>
        </form>
    );
};

export {UserForm};