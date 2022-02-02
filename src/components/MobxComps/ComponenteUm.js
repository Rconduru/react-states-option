import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"

const Wrapper = styled.div`
  width: 80%;
  height: 140px;
  background-color: gray;
  margin: auto;
`;

const ComponenteMobxUm = observer( ({userState}) => {


  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      { userState.job && (<p>{userState.job.name}</p>) }
      <label>Valor Bruto: </label>
      <span>{userState.job ? userState.grossValue : "-"}</span>
    </Wrapper>
  )
})

export default ComponenteMobxUm;