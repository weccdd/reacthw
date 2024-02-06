import {axiosService,urls} from "./axiosService";

const launchesService = {
    getAll: ()=> axiosService(urls.launches.base)
}
export {
    launchesService
}