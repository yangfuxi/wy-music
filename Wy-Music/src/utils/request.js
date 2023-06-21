import axios from 'axios'

const request = axios.create({
	// 基础路径 url = base url + request url
	baseURL: 'http://localhost:3000',
    withCredentials: true,
	// 请求超时
	timeout: 5000 
})

//配置请求拦截器
request.interceptors.request.use(
	config => config
)

//配置响应拦截器
request.interceptors.response.use(
	response => {
		return response.data;
	}
)

export default request
