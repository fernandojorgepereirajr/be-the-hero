import React from 'react'

import './global.css'

import Routes from './routes'


function App() {
  return (
    <Routes/>
  )
}

export default App


// Componente é uma função javascript que retorna conteudo hmtl.
// JSX é quando html é usado dentro do javascript.
// Estado é um informação mantida pelo componente e não pode ser alterada diretamente(imutabilidade), por isso usaremos o useState.
// 