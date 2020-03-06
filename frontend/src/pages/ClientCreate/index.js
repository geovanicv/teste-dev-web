import React from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

import { Form } from '@unform/web';
import api from '../../services/api'
import Input from '../../components/Input'

import './styles.css'


export default function ClientCreate() {

  async function handleSubmit({name, email, tags}) {
    try{
      await api.post('/clientes', {
        name,
        email,
        tags
      })
      
      toast.success('Cliente cadastrado!')

    } catch(err) {
      toast.error('Erro: verifique seus dados!')

    } 
    
  }

  return (
    <>
    <h1>Cadastrar Cliente</h1> 

    <Form onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome do cliente" required/>
      <Input name="email" type="email" placeholder="E-mail do cliente" required/>
      <Input name="tags" type="text" placeholder="Tags"/>
      <div className="options">
          <button type="submit">Salvar</button>
          <button type="button">        
            <Link to={'/'}>Voltar</Link>
          </button>
      </div>
    </Form>
    </>
  );
}
