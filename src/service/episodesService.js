import {urls} from "../constanst/urls";
import {apiService} from "./apiService";

const episodesService = {
    getAll: (page= "1") => apiService.get(urls.episode, {params: {page}})
}

export {
    episodesService
}