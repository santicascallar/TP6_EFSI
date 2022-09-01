import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Link,useNavigate} from "react-router-dom";
import Personas from '../Personas';

const PersonaDetalle = () => {
    const { personaId } = useParams();  
    return (
    <div>ACA MOSTRAMOS LOS DATOS DE LA PERSONA CORRESPONDIENTE A ESA PERSONAID: 
        {`ID: ${personaId}`}  
    </div> 
    );
};

export default PersonaDetalle;