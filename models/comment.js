// Definición del modelo de Comment con validación

module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Comment',
        {
            texto: {
                type: DataTypes.STRING,
                validate: { notEmpty: {msg: "-> Falta Comentario"}}
            },
            publicado: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }, 
        {
            classMethods: {
                contarComentariosNoPublicados: function() {
                    return this.aggregate('QuizId','count', {where: {'publicado':false}}).then('success',function(count){
                        return promise;
                    });
                },
                contarComentariosPublicados: function() {
                    return promise;   
                },
                contarPreguntasConComentarios: function() {
                    return this.aggregate('QuizId', 'count', {'distinct': true}).then('success', function(count) {
                        return promise;
                    })
                }
            }
        }
    );
};

