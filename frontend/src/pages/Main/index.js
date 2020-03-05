import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {confirmAlert} from 'react-confirm-alert'

import api from '../../services/api'

import { Container, ProductTable } from './styles'

export default function Main() {
  const [clients, setClientes] = useState([])

  useEffect(()=>{
    async function loadClients() {

      try{
        const response = await api.get('clientes')
        setClientes(response.data)
      } catch(err) {
        alert('erro na requsição')
      }
    }

    loadClients()
  }, [])

  function confirmAlertDelete(id){
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: 'Tem certeza de que deseja excluir este registro?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id)
        },
        {
          label: 'Não',
          onClick: () => {},
        }
      ]
    })
  }

  async function handleDelete(id) {
    try{
      await api.delete(`/clientes/${id}`) 
      window.location.reload()      
    } catch(err) {
      alert(err)
    }
    
  }

  return (
    <Container>
      
        <Link to={'/clientes'}>Cadastrar</Link>
      
      <ProductTable>
      <thead>
        <tr>
          <th>NOME</th>
          <th>EMAIL</th>
          <th>TAGS</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.id}>
            <td>
              <strong>{client.name}</strong>
            </td>
            <td>
              <strong>{client.email}</strong>
            </td>
            <td>
              <strong>{client.tags}</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <Link to={`clientes/${client.id}`}>Editar</Link>
                </button>
                <button type="button" onClick={()=>confirmAlertDelete(client.id)}>
                  Excluir
                </button>
              </div>
            </td>
          </tr>
        ))}
          
      </tbody>
      </ProductTable>
    </Container>
   
  );
}
