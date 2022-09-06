import React from 'react'
import {useNavigate} from "react-router-dom";
import Personas from '../Personas';

const Home = () => {
  let navigate = useNavigate();

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
      <button onClick={()=>redirigir(`PersonaDetalle/${personas.id}`)}>Detalles</button></li>)}

    </div>
  );
};

export default Home;