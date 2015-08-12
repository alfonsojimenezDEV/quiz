var path = require ('path');

//Postgress DATABASE_URL =
//SQLite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user = (url[2]||null);
var pwd = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port = (url[5]||null);
var host = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;



//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(DB_name, user, pwd, 
                                {dialect: protocol,
                                 protocol: protocol,
                                 port: port,
                                 host: host,
                                 storage: storage, //solo sqlite (.env)
                                 omitNull: true //solo Postgres
                                }
                             );

//Importar la definición de la tabla Quiz
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

//Importar la definición de la tabla Comment
var Comment = sequelize.import(path.join(__dirname, 'comment'));


//Establecimiento de las relaciones
Comment.belongsTo(Quiz, {onDelete: 'cascade'});
Quiz.hasMany(Comment, {onDelete: 'cascade'});


exports.Quiz = Quiz; //exportar la definición de tabla Quiz
exports.Comment = Comment; //exportar la definición de tabla Comment


//sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
    //success(...) ejecuta el manejador una vez creada la tabla
    Quiz.count().then(function (count) {
        if (count === 0) { //la tabal se inicializa solo si está vacía
            Quiz.create({
                pregunta: 'Capital de Italia',
                respuesta: 'Roma',
                tema: 'Otro'
            });
            Quiz.create({
                pregunta: 'Capital de Portugal',
                respuesta: 'Lisboa',
                tema: 'Otro'
            }).then(function() {console.log('Base de datos inicializada')});
            
        }
    });
});
