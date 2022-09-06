import React from 'react'

const PaginaContacto = () => {

  return (
      <div>
        <form>
          <label placeholder='Nombre'>
            Nombre:
            <input type="text" name="name" />
          </label>
          <label placeholder='Apellido'>
            Apellido:
            <input type="text" name="name" />
          </label>
          <label placeholder='Email'>
            Email:
            <input type="text" name="name" />
          </label>
          <label placeholder='Edad'>
            Edad:
            <input type="number" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  );
};

export default PaginaContacto;