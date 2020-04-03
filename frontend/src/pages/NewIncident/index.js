import React, { useState } from 'react'
// Importando o sistema de rotas que permite a transição entre as páginas.
import { Link, useHistory } from 'react-router-dom'

// Importando os ícones
import { FiArrowLeft } from 'react-icons/fi'

// Importando a api de comunicação da página com o backend.
import api from '../../services/api'

// Importando a estilização da tela.
import './styles.css'

// Importando as imagens que são usados na aplicação.
import logoImg from '../../assets/logo.svg'

// Criando a função principal, ou seja, minha página de cadastro de novo caso.
export default function NewIncident() {

    // Variaveis presentes no estado global da função e suas funções de modificações.
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    // Função responsável por criação de um novo caso.
    async function handleNewIncident(e) {
        e.preventDefault()

        const data = { title, description, value, }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastar, tente novamente.')
        }

    }
    
    // Estrutura em XML que será renderizada na minha página.
    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder='Título do caso' value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder='Valor em reais' value={value} onChange={e => setValue(e.target.value)} />
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
