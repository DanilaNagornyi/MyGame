const Question = ({ questions }) => {
  console.log(questions);
  return (
    <>
      {
        questions.length ?
          questions.map(el => {
            return <h4>
              {el.score}
            </h4>

          }) : <p> nothing</p>
      }
    </>
  );
}

export default Question;
