import React from 'react';
import { Form } from '@unform/web';
import api from '../../services/api'
import Input from '../../components/Input'

// import { Container } from './styles';

export default function ClientCreate() {

  async function handleSubmit({name, email, tags}) {
    try{
      await api.post('/clientes', {
        name,
        email,
        tags
      })
    } catch(err) {
      alert(err)
    } 
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" type="text" />
      <Input name="email" type="email" />
      <Input name="tags" type="text" />
      <button type="submit">Salvar</button>
    </Form>
  );
}
