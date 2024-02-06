import {axiosService, urls} from "./axiosService";

const postService = {
    getAll: ()=>axiosService(urls.posts.base),
    getById:(id)=>axiosService(urls.posts.byId(id))
}
export {
    postService
}