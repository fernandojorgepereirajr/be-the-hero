import React, { useState } from 'react'

// Importando os ícones
import { FiLogIn } from 'react-icons/fi'

// Importando o sistema de rotas que permite a transição entre as páginas.
import { Link, useHistory } from 'react-router-dom'

// Importando a api de comunicação da página com o backend.
import api from '../../services/api'

// Importando a estilização da tela.
import './styles.css'

// Importando as imagens que são usados na aplicação.
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// Criando a função principal, ou seja, minha página de login.
export default function Logon() {

    // Variaveis presentes no estado global da função e suas funções de modificações.
    const [id, setId] = useState('')
    const history = useHistory()
    
    // Função responsável por efetuar e  permitir login.
    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongID', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')

        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }
    // Estrutura em XML que será renderizada na minha página.
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero' />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder='Sua ID' value={id} onChange={e => setId(e.target.value)} />
                    <button className='button' type='submit'>Entrar</button>
                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        </div>
    )
}