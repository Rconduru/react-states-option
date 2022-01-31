import React, { useState } from 'react';
import styled from 'styled-components';
import { useContextSimpleHook } from '../state/Exemplo1-ContextoSimples';

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: silver;
  margin: auto;
`;

function ComponenteDois(props) {
  // Forma 2 - com hooks
  const [state, setState] = useContextSimpleHook();

  const [novoNome, setNovoNome] = useState('');

  // setState -> Atribui direto o valor
  // setState -> Função pra ele (callback)

  // Melhor forma de fazer
  const changeName = () => {
    setState((oldState) => {
      return {
        ...oldState,
        user: {
          ...oldState.user,
          name: novoNome,
        },
      };
    });
    setNovoNome('');
  };

  // Pior forma - MIGUÉ
  // const changeName2 = () => {
  //   setState({
  //     ...state,
  //     user: {
  //       ...state.user,
  //       name: novoNome,
  //     },
  //   });
  // };

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
      <input
        type="text"
        value={novoNome}
        onChange={(event) => setNovoNome(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
    </Wrapper>
  );
}

export default ComponenteDois;
