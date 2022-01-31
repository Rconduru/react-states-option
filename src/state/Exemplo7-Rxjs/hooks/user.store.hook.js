import React, { useState, useEffect } from 'react';
import userStore from '../store/user.store'

export default function useUserStoreFacade() {
  const [ name, setName ] = useState('')
  const [ state, setState ] = useState(userStore.initialState)

  const changeName = () => {
    if(name === 'Rodrigo'){
      userStore.userNameChange("Esse é um cuzão")
    } else {
      userStore.userNameChange(name)
    }

    setName('')
  }

  useEffect(() => {

    userStore.init()
    userStore.observe(setState)

    // Serviço que faz HTTP request GET para buscar o user
    // Depois eu dou um init store passando o resultado como padrão.

    // EXEMPLO funcionamento "real" para chamada de servicos
    // const getUser = async() => {

    //   userStore.setLoading(true)

    //   const resultData = await fetch('htttp://teste.com/user')

    //   if(resultData){
    //     userStore.init(resultData.data)
    //     userStore.observe(setState)
    //   }
    // }

    // getUser()

  }, [])

  return [ state, name, setName, changeName]
}