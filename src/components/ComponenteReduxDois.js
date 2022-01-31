import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { setNewUserName } from '../state/Exemplo3-Redux/actions/user/action'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: silver;
  margin: auto;
`;

function ComponenteDois(props) {

  const dispatch = useDispatch()
  const state = useSelector( state => {
    return { ...state.user }
  })

  const [novoNome, setNovoNome] = useState('');

  const changeName = () => {
    dispatch(setNewUserName(novoNome));
    setNovoNome('');
  };

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
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
