import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextComplex } from '../state/Exemplo2-ContextoComplexo';

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: gray;
  margin: auto;
`;

function ComponenteUm(props) {
  // Forma 1 - sem hooks
  const [state] = useContext(ContextComplex);

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </Wrapper>
  );
}

export default ComponenteUm;
