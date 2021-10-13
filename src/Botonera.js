import React from "react";

class Botonera extends React.Component {
  render() {
    return (
      <div className="opciones-tamanio">
        <button className="opcion">Pequeños</button>
        <button className="opcion">Medianos</button>
        <button className="opcion">Grandes</button>
        <button className="opcion">Todos</button>
      </div>
    );
  }
}

export default Botonera;
