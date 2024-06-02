let express = require('express');
let router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Mini message board', subtitle: 'New Message'})
});

router.post('/new', function(req, res, next) {
  const message = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  }
  messages.push(message)
  res.redirect('/')
})

module.exports = router
