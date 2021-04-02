import { useEffect } from "react";

const Themes = () => {

  useEffect(()=> {
    fetch('http://localhost:3000/api/v1/alTitle')
    .then(res => res.json())
    .then()
  })
  return ( 
    <div>
      Themes
    </div>
   );
}
 
export default Themes;
