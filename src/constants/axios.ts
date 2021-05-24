import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const baseURL: string | undefined = BASE_URL

const request = axios.create({
	baseURL,
	timeout: 20000
})

export default request
