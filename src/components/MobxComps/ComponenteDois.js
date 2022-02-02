import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"

const Wrapper = styled.div`
  width: 80%;
  height: 180px;
  background-color: silver;
  margin: auto;
`;

const jobs = [
  { id: "0", name: "dev junior", liquidValue: 5000, tribute: 15 },
  { id: "1", name: "dev pleno", liquidValue: 8000, tribute: 15 },
  { id: "2", name: "dev senior", liquidValue: 12000, tribute: 15 }
]

const ComponenteMobxDois = observer( ({userState, jobState}) => {

  const [newName, setNewName] = useState("")

  useEffect(() => {
    setNewName(userState.detail.name || "")
  }, [])

  // Primeiro conceito Estado mutável
  const changeName = () => {
    userState.detail.name = newName
  };

  const chooseJob = (jobId) => {
    const job = jobs.find(element => element.id === jobId)
    jobState.chooseJob(job)
    userState.changeJob(jobState.data)
  }
  

  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      <p>{jobState.data.name}</p>
      <p>{jobState.data.liquidValue}</p>
      <p>{jobState.data.tribute}</p>
      <input
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type="button" onClick={() => changeName()}>
        Trocar nome
      </button>
      <hr></hr>
      <select name="select" onChange={(event) => chooseJob(event.target.value)}>
        {jobs.map( job => <option key={job.id} value={job.id}>{job.name}</option> )}
      </select>
    </Wrapper>
  );
})

export default ComponenteMobxDois;
