import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import userStore from '../state/Exemplo7-Rxjs/store/user.store'
import useUserStoreFacade from '../state/Exemplo7-Rxjs/hooks/user.store.hook'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
`;

function ComponenteUm(props) {
  // Forma original
  // const [ state, setState ] = useState(userStore.initialState)

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setState)
  // }, [])

  // Por meio de Hooks

  const [ state ] = useUserStoreFacade()

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
    </Wrapper>
  );
}

export default ComponenteUm;
