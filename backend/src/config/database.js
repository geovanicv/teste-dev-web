// configuração do database utilizada na aplicação
// será exportado um objeto com as configs necessárias para acessar o database

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'zsxx4755',
  database: 'devweb',
  define: {
    timestamps: true, // cria por padrão createdat e updatedat
    underscored: true,
    underscoredAll: true,
  },
};