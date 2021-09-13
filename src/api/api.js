import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://alakarte-django-rest-api.azurewebsites.net/'
});

export default apiClient;