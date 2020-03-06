// conexão com o banco

import Sequelize from 'sequelize';
import Cliente from '../app/models/Cliente';
import dbConfig from '../config/database';

const models = [Cliente];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
