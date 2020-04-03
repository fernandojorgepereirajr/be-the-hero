import axios from 'axios'

// Criando a integração com o banco de dados.
const api = axios.create({
    baseURL: 'http://localhost:3333',
})
export default api