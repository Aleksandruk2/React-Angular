import axios from "axios";
import {API_URL} from "./apiConfig";
import {API_AllData_URL, API_KEY} from "./apiOMDConfig";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const axiosOMDbInstance = axios.create({
   baseURL: `${API_AllData_URL}[${API_KEY}]&`,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;