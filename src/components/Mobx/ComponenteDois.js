import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: silver;
  margin: auto;
`;

const jobs = [
  { id:"0", name:"dev junior", liquidValue: 5000, tribute: 15 },
  { id:"1", name:"dev pleno", liquidValue: 8000, tribute: 15 },
  { id:"2", name:"dev senior", liquidValue: 11000, tribute: 15 },
  { id:"3", name:"tech lead", liquidValue: 14000, tribute: 18 },
]

const ComponenteMobxDois = observer( ({ userState, jobState }) => {

  const [ newName, setNewName ] = useState("")

  useEffect(() => {
    setNewName(userState.detail.name || "")
    userState.changeUserJob(jobState.data)
  }, [])

  const changeName = () => {
    userState.changeUserName(newName)
  }

  const changeJob = (id) => {
    const job = jobs.find( element => element.id === id )
    jobState.changeJob(job)
  }

  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      <p>{jobState.name}</p>
      <input
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
      <hr />
      <label for="select-job">Trampos: </label>
      <select name="select-job" onChange={(event) => changeJob(event.target.value)}>
        {jobs.map( element => <option key={element.id} value={element.id}>{element.name}</option>)}
      </select>
    </Wrapper>
  );
})

export default ComponenteMobxDois;
