import { useEffect } from "react";
<<<<<<< HEAD

const Themes = () => {

  useEffect(()=> {
    fetch('http://localhost:3000/api/v1/alTitle')
    .then(res => res.json())
    .then()
  })
=======
import { useDispatch, useSelector } from "react-redux";
import { allTopics } from "../../redux/actionsCreate/gameActions";

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

>>>>>>> ayuna
  return ( 
    <div>
      Themes
    </div>
   );
}
 
export default Themes;
