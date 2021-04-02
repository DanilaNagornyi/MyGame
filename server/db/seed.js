const { connect, disconnect, mongoose } = require('mongoose');
const Question = require('./questions');
const Title = require('./title');

connect('mongodb://localhost:27017/YourGame', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('С базой всё ок.');
});


async function main() {
  const titles = [];

  titles.push(new Title({
    title: 'Итальянская кухня',
  }));
  titles.push(new Title({
    title: 'Русская кухня',
  }));
  titles.push(new Title({
    title: 'Вино',
  }));

  // await Question.insertMany(questions);
  await Title.insertMany(titles);
  await disconnect();
}
main();
