var express = require('express');
var router = express.Router();


var quizController = require('../controllers/quiz_controller');

/* Página de entrada GET home page. */
router.get('/', function(req, res) {
<<<<<<< HEAD
  res.render('index', { title: 'Quiz', errors: [] });
=======
  res.render('index', { title: 'Quiz' , errors: []});
>>>>>>> 65708fa72d7f2f820949fd2696cded8fa1897350
});


//Autoload de comandos :quizId
router.param('quizId', quizController.load); //autoload :quizId

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);
router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizes/:quizId(\\d+)', quizController.update);
router.delete('/quizes/:quizId(\\d+)', quizController.destroy);

router.get('/author', function(req, res) {
    res.render('author', {errors: []});
})
module.exports = router;
