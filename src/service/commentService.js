import {urls} from "../constants/urls";
import {axiosService} from "./apiService";

let apiService;
const commentService = {
    getByPostId: (postId) => axiosService.get(urls.comments, {params: {postId}})
}

export {
    commentService
}