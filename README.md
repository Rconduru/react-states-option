# StateProject Example

O objetivo é testar várias formas de guardar estado para aplicação.

- Contexto Simples;
- Contexto Complexo;
- Redux;
- Mobx ou RxJS ????

Estados:

1. Estados de Contextos (Isso não é estado)
   1.2 useContext
   1.2 - useContext + useReducer
   2 - Patterns de Flux (Isso sim é um estado, imutável, inclusive)
   2.1 - Redux (tradicional ou com toolkit)
   2.2 - Redux Saga (organizado mas engessado e lento)
   2.3 - Redux Thunk (desuso)
   3 - Pattern de Flux Reativo
   3.1 - Redux Observer
   4 - Arquiteturas Reativas (Streams de valores)
   4.1 - MobX
   4.2 - RxJs

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
