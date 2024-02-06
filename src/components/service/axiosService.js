import axios from "axios";
import {baseURL} from "../../constants/urls";

const axiosService = axios.create({baseURL});
const urls = {
    launches: {
        base: axiosService
    }
}

export {
    axiosService,
    urls
}