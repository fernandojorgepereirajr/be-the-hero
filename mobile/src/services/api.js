import axios from 'axios'

// Criando a comunicação com o backend.
const api = axios.create({
    baseURL: 'http://192.168.0133:'
})
export default api