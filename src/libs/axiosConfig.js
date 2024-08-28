import axios from "axios"
import utils from "./utils"

let baseUrl = "https://urbanwrk.com/cms/api"

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
			config.headers.Authorization = "Bearer " + "905a475459648dea63a4f8bc346fbc2108ebc9da796015a008a536d0a10e10f94e620872a98146fcbbed8aa91cfb3c62b2c32dfcb839e5d6c752bab405d40f3163fffea2db2acbb713d517fda697bb152a01384c61b77f65cea9eb9dffdc7f75c90df7811f289d8499c8b7bd4dd7554ce95a4d1df92ba47638b5436dbc51a250"
		
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
				utils.removeLocalStorageValue("token")
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
				utils.removeLocalStorageValue("token")
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
