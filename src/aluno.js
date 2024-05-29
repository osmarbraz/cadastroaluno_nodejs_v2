/**
 * Define a classe modelo Aluno a ser persistida.
 */

// Import das bibliotecas
const {Sequelize, Model, DataTypes } = require("sequelize");

// Import das configurações do banco
const sequelize = require("./dbconfig");

// Define o modelo para Aluno
class Aluno extends Model {}

Aluno.init({
    alunoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    curso: DataTypes.STRING,
    cpf: DataTypes.STRING
    }, 
    { sequelize, 
    modelName: 'aluno' 
    }
);

// Sincroniza o modelo com o banco de dados
sequelize.sync();

// Exporta o modelo
module.exports = Aluno;