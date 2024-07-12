import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://dashboard-school-node-js.onrender.com/" })

export default baseUrl