import * as Yup from 'yup';

import { Op } from 'sequelize';
import Cliente from '../models/Cliente';

class ClienteController {
  async index(req, res) {
    const { namec } = req.params;

    if (namec) {
      const client = await Cliente.findAll({
        where: {
          name: {
            [Op.iLike]: `${namec}%`,
          },
        },
      });

      if (!client) {
        return res.status(400).json({ error: 'Usuario não encontrado' });
      }

      return res.json(client);
    }

    const clients = await Cliente.findAll();
    return res.json(clients);
  }

  async show(req, res) {
    const { id } = req.params;

    const clientExists = await Cliente.findByPk(id);
    if (!clientExists) {
      return res.json({ error: 'Cliente não encontrado!' });
    }

    return res.json(clientExists);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      tags: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação dos dados falhou' });
    }

    const clientExists = await Cliente.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    const cliente = await Cliente.create(req.body);

    return res.status(200).json(cliente);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      tags: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação dos dados falhou' });
    }

    const { id } = req.params;

    const client = await Cliente.findByPk(id);

    if (!client) {
      return res.status(400).json({ error: 'Cliente não encontrado' });
    }

    const { email } = req.body;

    if (email !== client.email) {
      const emailExists = await Cliente.findOne({
        where: { email },
      });

      if (emailExists) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      }
    }

    await client.update(req.body);

    return res.status(200).json(client);
  }

  async delete(req, res) {
    const { id } = req.params;

    const clientExists = await Cliente.findByPk(id);

    if (!clientExists) {
      return res.status(400).json({ error: 'Cliente não existe' });
    }

    await Cliente.destroy({ where: { id } });

    return res.status(200).json({ message: 'Cliente deletado' });
  }
}

export default new ClienteController();
