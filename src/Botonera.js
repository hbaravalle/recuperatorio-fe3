import React from "react";

class Botonera extends React.Component {
  render() {
    return (
      <div class="opciones-tamanio">
        <button class="opcion">Pequeños</button>
        <button class="opcion">Medianos</button>
        <button class="opcion">Grandes</button>
        <button class="opcion">Todos</button>
      </div>
    );
  }
}

export default Botonera;
