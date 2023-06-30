import './App.css';
/* import Card from './components/Card.jsx'; */
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
/* import characters, { Rick } from './data.js'; */
import { useEffect, useState } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Login from './components/Login';
import Favorites from './components/Favorites';

function App() {

   let [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const EMAIL = "gabrielroque803@gmail.com";
   const PASSWORD = "Yolacon0"
   const navigate = useNavigate();

   function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   };

   const onClose = (id) => {
      console.log(characters)
      setCharacters(characters.filter(e => e.id !== id))
   }

   return (
      <div className='App'>
         {location.pathname === "/"? null: <Nav onSearch={onSearch}/>}
         {/* <Nav onSearch={onSearch}/> */}
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         <Routes>
            <Route path='/' element={<Login login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
         </Routes>   
      </div>
   );
}

export default App;
