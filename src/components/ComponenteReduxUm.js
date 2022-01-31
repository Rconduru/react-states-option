import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  width: 80%;
  height: 140px;
  background-color: gray;
  margin: auto;
`;

function ComponenteUm(props) {

  const state = useSelector( state => {
    return { user: state.user, job: state.joberson }
  })

  return (
    <Wrapper>
      <p>{state.user.detail.name}</p>
      <p>{state.user.detail.email}</p>
      <p>{state.job.name}</p>
      <p>{state.job.company}</p>
    </Wrapper>
  );
}

export default ComponenteUm;
