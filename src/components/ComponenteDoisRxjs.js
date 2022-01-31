import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUserStoreFacade from '../state/Exemplo7-Rxjs/hooks/user.store.hook'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: yellow;
  margin: auto;
`;

function ComponenteDois(props) {
  // Forma Original
  // const [ state, setState ] = useState(userStore.initialState)
  // const [novoNome, setNovoNome] = useState('');

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setState)
  // }, [])

  // const changeName = () => {
  //   userStore.userNameChange(novoNome)
  //   setNovoNome('');
  // };

  // Forma por meio de hook

  const [ state, name, setName, changeName ] = useUserStoreFacade()

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => changeName(name)}>
        Trocar nome
      </button>
    </Wrapper>
  );
}

export default ComponenteDois;
