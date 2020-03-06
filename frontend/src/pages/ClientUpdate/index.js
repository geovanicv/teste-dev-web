import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import api from '../../services/api'
import Input from '../../components/Input'

import './styles.css'


export default function ClientEdit() {

const { id } = useParams();

  const [client, setClient] = useState([])

  useEffect(()=> {
    console.log(id)
    async function getClientData(){
      const response = await api.get(`clientes/show/${id}`)
      console.log(response.data)
      setClient(response.data)
    }
    getClientData()
  }, [id])

  async function handleSubmit({name, email, tags}) {
    try{
      await api.put(`clientes/${id}`, {
        name,
        email,
        tags
      })

      toast.success('Cliente editado!')


    } catch(err) {
      toast.error('Erro: verifique os dados!')
    } 
  }

  return (
      <>
      <h1>Editar Cliente</h1> 
      <Form initialData={client} onSubmit={handleSubmit}>
        <Input name="name" type="text" required />
        <Input name="email" type="email" required />
        <Input name="tags" type="text" />
        <div className="options">
          <button type="submit">Salvar</button>
          <button type="submit">        
            <Link to={'/'}>Voltar</Link>
          </button>
        </div>
      </Form>
      </>
  );
}
