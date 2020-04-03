import React, { useState, useEffect } from 'react'

// Importando o sistema de rotas que permite a transição entre as páginas.
import { Link, useHistory } from 'react-router-dom'

// Importando os ícones
import { FiPower, FiTrash2 } from 'react-icons/fi'

// Importando a api de comunicação da página com o backend.
import api from '../../services/api'

// Importando a estilização da tela.
import './styles.css'

// Importando as imagens que são usados na aplicação.
import logoImg from '../../assets/logo.svg'

// Criando a função principal, ou seja, minha página de perfil.
export default function Profile() {
    // Variaveis presentes no estado global da função e suas funções de modificações.
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])
    
    // Função responsável por efetuar e  permitir que um caso seja deletado.
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incident/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setIncidents(incidents)

        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    // Função responsável por efetuar e  permitir logout.
    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }
    // Estrutura em XML que será renderizada na minha página.
    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem vinda, {ongName}</span>
                <Link className='button' to='/incident/new'>Cadastrar novo caso</Link>
                <button type='button' onClick={handleLogout}>
                    <FiPower size={18} color='#E02041' />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type='button' onClick={() => handleDeleteIncident(incident)} >
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}