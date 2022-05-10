import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const BASE_URL ='http://localhost:8000/'

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const axiosInstance = axios.create({
    BASE_URL,
    headers:{Authorization: `Bearer ${authTokens?.access}`}
})

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens) {
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    }

    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

    if(!isExpired) return req

    const response = await axios.post(`${BASE_URL}/api/token/refresh/`, {
        refresh: authTokens.refresh
    })

    localStorage.setItem('authTokens', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
})