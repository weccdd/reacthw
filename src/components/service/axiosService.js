import axios from "axios";
import {baseURL} from "../../constants/urls";

const axiosService = axios.create({baseURL});
const posts = '/posts'

const urls = {
    posts:{
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}
export {
    axiosService,
    urls
}
