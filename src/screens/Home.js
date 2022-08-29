import React from 'react'
import { Link,useNavigate   } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const redirigir = (url)=>{
    navigate(url);
  }

  return (
    <>
      <div>Home</div>
      <button onClick={()=>redirigir('contacto')}>Ir a Contacto</button>
      <button onClick={()=>redirigir('detalle')}>Ir a Detalle</button>
      <Link to='/contacto'>ir a contacto</Link>
    </>
  )
}

