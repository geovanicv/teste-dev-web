import {Router} from 'express'

import ClienteController from './app/controllers/ClienteController'

const routes = new Router();

routes.get('/clientes', ClienteController.index) //listar todos clientes
routes.get('/clientes/filter/:namec', ClienteController.index) //listar clientes baseados na busca
routes.get('/clientes/show/:id', ClienteController.show) //busca um cliente especifico para fins de edição/deleção

routes.post('/clientes', ClienteController.store)
routes.put('/clientes/:id', ClienteController.update)
routes.delete('/clientes/:id', ClienteController.delete)

export default routes