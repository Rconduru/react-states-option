import './App.css';
import ComponenteMobxUm from "./components/MobxComps/ComponenteUm"
import ComponenteMobxDois from "./components/MobxComps/ComponenteDois"
import userState from "./state/Exemplo6-Mobx/store/user.store"
import jobState from "./state/Exemplo6-Mobx/store/job.store"

function App() {
  return (
    <div className="App">
      <ComponenteMobxUm userState={userState}/>
      <ComponenteMobxDois userState={userState} jobState={jobState}/>
      {/* <ComponentRxjsUm />
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
      </ContextComplexProvider> */}
    </div>
  );
}

export default App;
