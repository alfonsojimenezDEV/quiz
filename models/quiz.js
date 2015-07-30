// Definición del modelo de Quiz

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz', 
                           { 
                                pregunta: {
                                    type: DataTypes.STRING,
<<<<<<< HEAD
                                    validate: {notEmpty: {msg: "-> Falta Pregunta"}}
                                },
                                respuesta: { 
                                    type: DataTypes.STRING,
                                    validate: {notEmpty: {msg: "-> Falta Respuesta"}}
                                },
                                tema: {
                                    type: DataTypes.STRING,
                                    validate: {notEmpty: {msg: "-> Falta indicar el tema"}}
=======
                                    validate: { notEmpty: {msg: "-> Falta pregunta"}}
                                },
                                respuesta: {
                                    type: DataTypes.STRING,
                                    validate: { notEmpty: {msg: "-> Falta respuesta"}}
>>>>>>> 65708fa72d7f2f820949fd2696cded8fa1897350
                                }
                           });
}