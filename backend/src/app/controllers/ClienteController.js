import Cliente from '../models/Cliente'

class ClienteController {
  async index(req, res){

    const {id} = req.params;

    if(id) {
      const client = await Cliente.findOne({
        where: {id}
      });

      if(!client) {
        return res.status(400).json({error: 'Usuario não encontrado'})
      }

      return res.json(client)
    }

    const clients = await Cliente.findAll();
    return res.json(clients)
  }

  async store(req, res) {
    const clientExists = await Cliente.findOne({
      where: { email: req.body.email }
    }) 

    if(clientExists) {
      return res.status(400).json({error: 'E-mail já cadastrado'})
    }

    const cliente = await Cliente.create(req.body) 

    return res.json(cliente)
  }

  async update(req, res) {
    const {id} = req.params;

    const client = await Cliente.findByPk(id)

    if(!client) {
      return res.status(400).json({ error: 'Cliente não encontrado'})
    }

    const {email} = req.body;

    if(email !== client.email){
      const emailExists = await Cliente.findOne({
        where: { email }
      }) 

      if(emailExists) {
        return res.status(400).json({error: 'E-mail já cadastrado'})
      }
    }

    await client.update(req.body)

    return res.json(client)

  }

  async delete(req, res) {
    const {id} = req.params;

    const clientExists = await Cliente.findByPk(id)
    
    if(!clientExists){
      return res.status(400).json({error: 'Cliente não existe'})
    }

    await Cliente.destroy({where: {id}})

    return res.status(200).json({message: 'Cliente deletado'})
  }
}


export default new ClienteController();