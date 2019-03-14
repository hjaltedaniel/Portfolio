import axios from "axios"

const apiClient = axios.create({
    baseURL: `https://hjaltes-impartial-elephant.s1.umbraco.io/umbraco/rest/v1/content/published`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})

export default {
    GetRoot() {
        return apiClient.get("/")
    },
    GetProjects() {
        return apiClient.get('/aa37a913-14ee-4545-855d-178c2ecdb2ad/children')
    }
}