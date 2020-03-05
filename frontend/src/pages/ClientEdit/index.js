import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import api from '../../services/api'
import Input from '../../components/Input'

// import { Container } from './styles';

export default function ClientEdit() {
  const [client, setClient] = useState([])
  const { id } = useParams();

  useEffect(()=> {
    async function getClientData(){
      const response = await api.get(`clientes/${id}`)
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
    } catch(err) {
      alert(err)
    } 
  }

  return (
    <Form initialData={client} onSubmit={handleSubmit}>
      <Input name="name" type="text" />
      <Input name="email" type="email" />
      <Input name="tags" type="text" />
      <button type="submit">Salvar</button>
    </Form>
  );
}
