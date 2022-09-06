import React from 'react'
import Personas from '../Personas';

const Estadisticas = () => {
    let Cantpersonas = 0;
    let personaMayor;
    let personaMenor;
    let mayorEdad = 0;
    let menorEdad = 150;

    Personas.forEach(person => {

        if (parseInt(person.edad) > 35) {Cantpersonas = Cantpersonas + 1}
    
        if (parseInt(person.edad) > mayorEdad) {
        personaMayor = person.nombre
        mayorEdad = person.edad
        }
        else if(parseInt(person.edad) ===mayorEdad) {personaMayor = personaMayor + person.nombre}
        
        if (parseInt(person.edad) < menorEdad) {
        personaMenor = person.nombre
        menorEdad = person.edad
        }
        else if(parseInt(person.edad) ===menorEdad) {personaMenor = personaMenor + person.nombre}
      })

  return (
      <div>
        
      <h1>Estadisticas:</h1>

      <h2>Personas mayores a 35 años: {Cantpersonas}</h2>

      <h2>La persona mayor es {personaMayor} y tiene {mayorEdad} años</h2>
      <h2>La persona menor es {personaMenor} y tiene {menorEdad} años</h2>

    </div>
  );
};

export default Estadisticas;