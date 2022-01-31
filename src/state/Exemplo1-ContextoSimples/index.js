import React, { createContext, useState, useContext } from 'react';

// Criar um context
const ContextSimple = createContext({});

// Criar um provider
const ContextSimpleProvider = (props) => {
  // props.children
  const { children } = props;
  const [state, setState] = useState({
    user: {
      name: 'Rodrigo',
      email: 'rodrigo.conduru@xpto',
    },
    profile: '',
  });

  return (
    <ContextSimple.Provider value={[state, setState]}>
      {children}
    </ContextSimple.Provider>
  );
};

// Helper Hook
const useContextSimpleHook = () => {
  const [state, setState] = useContext(ContextSimple);

  return [state, setState];
};

export { ContextSimple, ContextSimpleProvider, useContextSimpleHook };
