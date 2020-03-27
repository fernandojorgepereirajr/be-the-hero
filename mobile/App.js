import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello OmniStack</Text>
    </View>
  );
}



// Em HTML existem muitas outras tags, e essas tags possuem outros significados/resultdos
// No Native não existe semantica e estilização diferente para as tags.
// No Native nã existe o 'classname', existe o style que possui a mesma funcionalidade de estilização mas com a caracteristica de ser feito no mesmo documento.
// Todos os elementos já possuem display flex
// Propriedade do css: O que era assim 'background-color' vai ser assim no css native 'backgroundColor'
// Valores que não são números devem ter aspas.
// Herança de estilo não existe, cada elemento deve ter sua estilização propria.
