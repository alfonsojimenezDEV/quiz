var models = require('../models/models.js');
var Sequelize = require('sequelize');

var estadisticasDatos = {};

exports.obtenerDatos = function(req, res, next) {
    Sequelize.Promise.all([
        models.Quiz.count(),
        models.Comment.count(),
        models.Comment.contarComentariosNoPublicados(),
        models.Comment.contarPreguntasConComentarios()
    ]).then(function(values) {
        estadisticasDatos.numPreguntas = values[0];
        estadisticasDatos.numComentarios = values[1];
        estadisticasDatos.numComentariosNoPublicados = values[2];
        estadisticasDatos.numPreguntasConComentarios = values[3];
        estadisticasDatos.numPreguntasSinComentarios=values[0]-values[3];
        estadisticasDatos.numComentariosPublicados=values[1]-values[2];
        estadisticasDatos.mediaComentarios = parseFloat(values[1]/values[0]).toFixed(2);
    }).catch(function(err) {
        next(err);
    }).finally(function(){
        next();
    });
};

// GET /quizes/estadisticas
exports.show = function(req, res) {
    res.render('statistics/show.ejs', {estadisticasDatos: estadisticasDatos, errors: []});
};