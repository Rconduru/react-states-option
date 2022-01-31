import React, { createContext, useReducer, useContext } from 'react';
import { stateReducer, initialState } from './reducer';

// Criar um context
export const ContextComplex = createContext({});

// Criar um provider
export const ContextComplexProvider = (props) => {
  // props.children
  const { children } = props;
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <ContextComplex.Provider value={[state, dispatch]}>
      {children}
    </ContextComplex.Provider>
  );
};

export const useContextComplexHook = () => {
  const [state, dispatch] = useContext(ContextComplex);

  return [state, dispatch];
};
