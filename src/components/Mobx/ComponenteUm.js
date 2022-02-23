import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
  width: 80%;
  height: 160px;
  background-color: gray;
  margin: auto;
`;

const ComponenteUmMobx = observer( ({ userState }) => {

  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      {userState.job && (<p>{userState.job.name}</p>)}
      <label>Value Líquido: </label> <span>{userState.job ? userState.grossValue : "-"}</span>
      <br/>
      <label>É velho? </label><span>{userState.isOld}</span>
    </Wrapper>
  ); 
})

export default ComponenteUmMobx;
