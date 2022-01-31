import './App.css';
import ComponenteComplexoUm from './components/ComponenteComplexoUm';
import ComponenteComplexoDois from './components/ComponenteComplexoDois';
import ComponenteUm from './components/ComponenteUm';
import ComponenteDois from './components/ComponenteDois';
import { ContextSimpleProvider } from './state/Exemplo1-ContextoSimples';
import { ContextComplexProvider } from './state/Exemplo2-ContextoComplexo';

import ComponenteReduxUm from './components/ComponenteReduxUm'
import ComponenteReduxDois from './components/ComponenteReduxDois'

import ComponentRxjsUm from './components/ComponenteUmRxjs'
import ComponentRxjsDois from './components/ComponenteDoisRxjs'

function App() {
  return (
    <div className="App">
      <ComponentRxjsUm />
      <ComponentRxjsDois />
      <ComponenteReduxUm />
      <ComponenteReduxDois />
      <ContextSimpleProvider>
        <div style={{ width: '100%' }}>
          <ComponenteUm />
          <ComponenteDois />
        </div>
      </ContextSimpleProvider>
      <br />
      <ContextComplexProvider>
        <div style={{ width: '100%' }}>
          <ComponenteComplexoUm />
          <ComponenteComplexoDois />
        </div>
      </ContextComplexProvider>
    </div>
  );
}

export default App;
