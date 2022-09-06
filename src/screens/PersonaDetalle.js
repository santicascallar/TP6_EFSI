import React from 'react'
import { useParams } from "react-router-dom";
import Personas from '../Personas';

const PersonaDetalle = () => {
    const { personaId } = useParams();

    const Persona = Personas.find(persona => persona.id === personaId);
    console.log(Persona);

    return (
    <div>
        <h1>{`ID: ${personaId}`}</h1>

        <h2>Nomre y Apellido: {Persona.nombre} {Persona.apellido}</h2>
        <h3>Email: {Persona.email}</h3>
        <h3>Edad: {Persona.edad}</h3>
        
    </div> 
    );
};

export default PersonaDetalle;