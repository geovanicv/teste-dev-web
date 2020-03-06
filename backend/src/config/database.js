require('dotenv/config')

// configuração do database utilizada na aplicação
// será exportado um objeto com as configs necessárias para acessar o database

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // cria por padrão createdat e updatedat
    underscored: true,
    underscoredAll: true,
  },
};