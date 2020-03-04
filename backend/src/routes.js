import {Router} from 'express'
import Cliente from './app/models/Cliente'

const routes = new Router();

routes.get('/', async (req, res) => {
  const cliente = await Cliente.create({
    name: 'Geovani Silva Cavalcante',
    email: 'geovani@gmail.com',
    tags: 'TI, Dev, UI'
  })
  
  return res.json(cliente)
})

export default routes