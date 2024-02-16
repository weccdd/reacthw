import {axiosService} from "./apiService";
import {urls} from "../constants/urls"

const userService = {
    getAll: () => axiosService.get(urls.users.base),
    getById: (id) => axiosService.get(urls.users.getByUsersId(id))
}
export {
    userService
}