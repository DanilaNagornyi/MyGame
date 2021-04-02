const { connect, disconnect, Mongoose } = require('mongoose');
const Question = require('./questions');
const Title = require('./title');

connect('mongodb://localhost:27017/YourGame', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('С базой всё ок.');
});


async function main() {
  const questions = [];
  questions.push(new Question({
    question: ,
    answer:,
    score: 100,
  }));
  questions.push(new Question({
    question: ,
    answer:,
    score: 0,
  }));
  questions.push(new Question({
    question: ,
    answer:,
    score: 0,
  }));
  questions.push(new Question({
    question: ,
    answer:,
    score: 0,
  }));
  questions.push(new Question({
    question: ,
    answer:,
    score: 0,
  }));
  questions.push(new Question({
    question: ,
    answer:,
    score: 0,
  }));

  const titles = [];

  titles.push(new Title({
    title: ,
    questions: [
      Mongoose.Type.ObjectId('tut bidet id questiona'),

    ],
  }));
  titles.push(new Title({
    title: ,
    questions: [
      type: Schema.Types.ObjectId,
      ref: 'Question',
    ],
  }));
  titles.push(new Title({
    title:,
    questions: [
      Mongoose.Type.ObjectId('tut bidet id questiona'),

    ],
  }));
  titles.push(new Title({
    title: ,
    questions: [
      Mongoose.Type.ObjectId('tut bidet id questiona'),

    ],
  }));
  titles.push(new Title({
    title: ,
    questions: [
      Mongoose.Type.ObjectId('tut bidet id questiona'),

    ],
  }));
  await Question.insertMany(questions);
  await Title.insertMany(titles);
  await disconnect();
}
main();
