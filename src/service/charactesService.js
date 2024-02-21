
import {apiService} from "./apiService";
import {urls} from "../constanst/urls";

const CharactersService = {
    getById: (id) => apiService.get(urls.character.byId(id))
}
export {
    CharactersService
}