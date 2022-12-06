import axios from 'axios'


export const request = axios.create({
    baseURL: '/api',
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem('token')
    }
}).interceptors.response.use((res) => {
   if (res.status === 200) {
       return res.data
   }
   if (res.status === 401) {
       window.location.href = '/signin'
       return
   }
   throw new Error(res.data.message)
})