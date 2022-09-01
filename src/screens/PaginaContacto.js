import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from "react-router-dom";

const PaginaContacto = () => {
  let navigate = useNavigate();

  const redirigir = (url)=>{
    navigate(url);
  }

  return (
      <div>

      <h1>ok</h1>

    </div>
  );
};

export default PaginaContacto;