import { useState } from "react";

export default function V(props) {
let [id, setId] = useState("");

const handleChange = (event) => {
   setId(id = event.target.value)
   console.log(id);
}

const { onSearch } = props
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
