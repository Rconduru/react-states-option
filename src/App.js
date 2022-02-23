import './App.css';
import ComponenteUmMobx from './components/Mobx/ComponenteUm'
import ComponenteDoisMobx from './components/Mobx/ComponenteDois'
import userStore from './state/Exemplo6-Mobx/user.store'
import jobStore from './state/Exemplo6-Mobx/job.store'

function App() {
  return (
    <div className="App">
      <ComponenteUmMobx userState={userStore}/>

      
      <ComponenteDoisMobx userState={userStore} jobState={jobStore}/>
    </div>
  );
}

export default App;
