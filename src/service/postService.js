import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId: (userId) => axiosService.get(urls.posts.base, {params: {userId}}),
    getById: (id) => axiosService.get(urls.posts.getPostsById(id))
};

export {
    postService
};