import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from "react-router-dom";
import Personas from '../Personas';
import Persona from '../components/Persona';

const Home = () => {
  let navigate = useNavigate();

  const [personas, setPersonas] = useState([Personas])

  const redirigir = (url)=>{
    navigate(url);
  }

  //<Link to="/home">Home</Link>

  return (
      <div>
        Menu de Navegacion:
        
      <button onClick={()=>redirigir('Estadisticas')}>Estadisticas</button>
      <button onClick={()=>redirigir('PaginaContacto')}>Pagina de Contacto</button>

      {Personas.map((personas) => 
      <li key={personas.id}>{personas.nombre} {personas.apellido} 
      <button onClick={()=>redirigir('PersonaDetalle')}>Detalles</button></li>)}

    </div>
  );
};

export default Home;