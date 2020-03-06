import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tags: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

export default Cliente;
