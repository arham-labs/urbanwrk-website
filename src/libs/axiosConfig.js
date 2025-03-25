import axios from "axios"

let baseUrl = "https://www.urbanwrk.com/cms/api"

const Axios = axios.create({
	baseURL: baseUrl,
	headers: {
		"Access": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Authorization, Content-Type",
	},
})

Axios.interceptors.request.use(
	(config) => {
			config.headers.Authorization = "Bearer " + "443d92f6c43efff829010abf94a500289c261775bc001f05e1320f14ccb615cadcf1f477727da943bebdc7116d39e29f2ec840a7796fde64f02c906a2c34c80d7e3ca5fe6bfb37ca97242efd3cbdf41e100cf653303b3494d8573547df427d88c9d9fa3897aa0a42a3c9e480d803a3abd8db51080979bc53ccd8c56eecd08b7a443d92f6c43efff829010abf94a500289c261775bc001f05e1320f14ccb615cadcf1f477727da943bebdc7116d39e29f2ec840a7796fde64f02c906a2c34c80d7e3ca5fe6bfb37ca97242efd3cbdf41e100cf653303b3494d8573547df427d88c9d9fa3897aa0a42a3c9e480d803a3abd8db51080979bc53ccd8c56eecd08b7a"
		
		return config
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

Axios.interceptors.response.use(
	function (response) {
		if (!navigator.onLine) {
			alert(
				"Offline \nYour network is unavailable, Check your data or wifi connection."
			)
		}
		return response
	},
	function (error) {
		if (error?.response?.status === 401) {
			if (
				error.response.data.message.includes(
					"The given token is invalid"
				)
			) {
				console.log("error", error.response.data.message)
				window.location.href = "/"
				// store.dispatch(logout());
			}
			return Promise.reject(error)
		} else if (error.response.status === 422) {
			if (
				error.response.data.message.includes(
					"The given token is invalid"
				)
			) {
				console.log("error", error.response.data.message)
				window.location.href = "/"
				// store.dispatch(logout());
			}
			return Promise.reject(error)
		} else {
			return Promise.reject(error)
		}
	}
)

export default Axios
