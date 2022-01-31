import React, { useState } from 'react';
import styled from 'styled-components';
import { useContextComplexHook } from '../state/Exemplo2-ContextoComplexo';
import { setNewUserName } from '../state/Exemplo2-ContextoComplexo/actions'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: silver;
  margin: auto;
`;

function ComponenteDois(props) {
  // Forma 2 - com hooks
  const [state, dispatch] = useContextComplexHook();

  const [novoNome, setNovoNome] = useState('');

  const changeName = () => {
    dispatch(setNewUserName(novoNome));
    setNovoNome('');
  };

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
