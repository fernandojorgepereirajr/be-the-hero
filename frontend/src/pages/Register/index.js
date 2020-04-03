import React, { useState } from 'react'

// Importando o sistema de rotas que permite a transição entre as páginas.
import { Link, useHistory } from 'react-router-dom'

//Importando os ícones
import { FiArrowLeft } from 'react-icons/fi'

// Importando a api de comunicação da página com o backend.
import api from '../../services/api'

// Importando a estilização da tela.
import './styles.css'

// Importando as imagens que são usados na aplicação.
import logoImg from '../../assets/logo.svg'

// Criando a função principal, ou seja, minha página de cadastro.
export default function Register() {

    // Variaveis presentes no estado global da função e suas funções de modificações.
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    // Função responsável por cadastro do usuário.
    async function handleRegister(e) {
        e.preventDefault()
        const data = { name, email, whatsapp, city, uf, }
        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de aceso: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            alert(`Erro no cadastro, tente novamente.`)
        }

    }
    
    // Estrutura em XML que será renderizada na minha página.
    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar a Logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder='Nome da ONG' value={name} onChange={e => setName(e.target.value)} />
                    <input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder='WhatsApp' value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className='input-group'>
                        <input placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder='UF' style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className='button' type='submit'> Cadastrar</button>
                </form>
            </div>
        </div>
    )
}