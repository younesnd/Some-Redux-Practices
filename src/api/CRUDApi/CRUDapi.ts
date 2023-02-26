import axios , {AxiosInstance, AxiosRequestConfig} from "axios";


const axiosParams = {
    baseURL:
        process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
}

const axiosInstance= axios.create(axiosParams)

const CRUDapi = (axios: AxiosInstance) => {
    return {
        get: <T>(url:string , config:AxiosRequestConfig={}) =>
            axios.get<T>(url,config),
        delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
            axios.get<T>(url, config),
        post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
            axios.post<T>(url, body, config),
        patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
            axios.post<T>(url, body, config),
        put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
            axios.post<T>(url, body, config),
    }
}

export default CRUDapi(axiosInstance)