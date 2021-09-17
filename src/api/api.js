import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://alakarte-dev-api.azurewebsites.net/'
});

export default apiClient;