const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { connect } = require('mongoose');
const session = require('express-session');
const Title = require('./db/title');
const Question = require('./db/questions');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

// const booksRouter = require('./routes/allBooks');

// const regRouter = require('./routes/registration');

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: 'trololo',
  resave: true,
  saveUninitialized: false,
  cookie: { expires: 60000000 },
};

app.use(session(sessionConfig));


app.get('/api/v1/alTitle', async (req, res) => {
  const allTitles = await Title.find().populate('questions');
  res.status(200).json(allTitles);
});

app.get('/api/v1/:id', async (req, res) => {
  const question = await Question.findById(req.params.id);
  res.json(question);
});

app.post('/api/v1/answer', async (req, res) => {
  const { answer, id } = req.body;
  console.log(req.body);

  const question = await Question.findById(req.body.id);
  if (answer === question.answer) {
    return res.sendStatus(200);
  }
  return res.sendStatus(418);
});
//locals
// app.use((req, res, next) => {
//   res.locals.user = req.session?.user;
//   console.log('TUT MIDDle');
//   next();
// });

app.listen(port, () => {
  console.log(`Сервер успешно запущен на порту ${port}.`);

  const connectionAddress = process.env.DATABASE_CONNECTION_ADDRESS ?? 'mongodb://localhost:27017/YourGame';

  connect(connectionAddress, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Подлючение к базе данных успешно.');
  });
});
