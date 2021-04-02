import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTopics } from "../../redux/actionsCreate/gameActions";
import Question from "../Question/Question";

const Themes = () => {


  const topics = useSelector(state => state.topics);

  const dispatch = useDispatch();

  useEffect(() => {
    // получаем topics с бэка
    fetch("http://localhost:3000/api/v1/alTitle")
      .then(response => response.json())
      .then(topics => dispatch(allTopics(topics)))

  }, []);

  console.log(topics);

  return (

    <div>
      {
        topics.length ?
          topics.map(el => {
            return (
              <>
                <div key={el._id}>{el.title}</div>
                <Question questions={el.questions} />
              </>
            )
          }) : <p>nothing</p>
      }
    </div>
  );
}

export default Themes;
