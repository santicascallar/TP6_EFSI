import React from 'react'
import { useParams } from "react-router-dom";
import { Link,useNavigate} from "react-router-dom";
import Personas from '../Personas';

const PersonaDetalle = () => {
    const { personaId } = useParams();

    let arrayID = [Personas];

    /*const { id } = useParams();
    const post = getPost(id);
    */

    const Persona = Personas.find(persona => persona.id === personaId);
    console.log(Persona);

    return (
    <div>ACA MOSTRAMOS LOS DATOS DE LA PERSONA CORRESPONDIENTE A ESA PERSONAID: 
        <h1>{`ID: ${personaId}`}</h1>

        <h2>{Persona.nombre} {Persona.apellido}</h2>
        
    </div> 
    );
};

export default PersonaDetalle;