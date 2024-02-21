import axios from "axios";

import {baseURL} from "../constanst/urls";


const apiService = axios.create({baseURL});

export {
    apiService
}