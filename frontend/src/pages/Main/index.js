import React, {useEffect, useState} from 'react'
import { MdSearch, MdDelete, MdEdit } from 'react-icons/md';
import {Link} from 'react-router-dom'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import {toast} from 'react-toastify'
import api from '../../services/api'
import './styles.css'



export default function Main() {
  const [clients, setClientes] = useState([])

  
  useEffect(()=>{
    loadClients()
  }, [])

  async function loadClients() {

    try{
      const response = await api.get('clientes')
      setClientes(response.data)
    } catch(err) {
      alert('erro na requsição')
    }
  }


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

  async function handleSearch() {
    const cliente = document.getElementById('search').value;

    if(cliente === '') {
      loadClients()
    }

    try{
      const response = await api.get(`clientes/filter/${cliente}`)
      setClientes(response.data)
    } catch(err) {
      alert('erro na requsição')
    }
    
  }

  async function handleDelete(id) {

      await api.delete(`/clientes/${id}`) 
      window.location.reload()
      toast.success('Cliente deletado!')
  }

  return (
    <>
      <div className="header">
        <button className="cadastrar" type="button">
          <Link to={'/clientes'}>Cadastrar um novo cliente</Link>
        </button>

        <div className="search">
          <input type="text" id="search" placeholder="pesquisar cliente" />
          <button type="button" onClick={()=>handleSearch()}>
            <MdSearch size={36} color="#FFF" />
          </button>
        </div>
      </div>

      <table>
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
              <div className="actions">
                <button type="button">
                  <Link to={`clientes/${client.id}`}>
                    <MdEdit size={30} color="#7159c1" />
                  </Link>
                </button>
                <button type="button" onClick={()=>confirmAlertDelete(client.id)}>
                  <MdDelete size={30} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
        ))}
          
      </tbody>
    </table>
    </>
   
  );
}
