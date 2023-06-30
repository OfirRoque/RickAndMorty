import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {

   const { name, status, species, gender, origin, image } = props;
   const { onClose } = props
   const { id } = props;
   const [ isFav, setIsfav ] = useState(false);
   const { addFav } = props;
   const { removeFav } = props;
   const { myFavorite } = props;

   const handleFavorite = () => {
      if(isFav) {
         setIsfav(false)
         removeFav(id)
      } else {
         setIsfav(true)
         addFav({ id, name, status, species, gender, origin, image, onClose })
      }
   }

   useEffect(() => {
      myFavorite.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         } 
      });
   }, [myFavorite]);

   console.log(isFav);
   console.log(myFavorite);

   return (
      <div>
            
         <button onClick={handleFavorite}>{isFav? "❤️":"🤍"}</button>  
         <button onClick={() => onClose(props.id)}>X</button>
         <Link to={`/detail/${id}`}><h4>{props.name}</h4></Link>
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt='' />
      </div>
   );
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (props) => {dispatch(addFav(props))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorite: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
