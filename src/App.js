import React from "react";
import CardPerrito from "./CardPerrito";
import Botonera from "./Botonera";
import "./App.css";

import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: "Todos",
    };
    this.cambiarFiltro = this.cambiarFiltro.bind(this);
  }

  cambiarFiltro(elFiltroElegido) {
    this.setState({
      filtro: elFiltroElegido,
    });
  }

  render() {
    return (
      <div class="app">
        <header>
          <h1>Perritos</h1>
        </header>
        <main>
          <div class="listado-perritos">
            {this.state.filtro === "Todos"
              ? data.map((element) => (
                  <CardPerrito raza={element.name} tamanio={element.size} />
                ))
              : data
                  .filter((element) => element.size === this.state.filtro)
                  .map((element) => (
                    <CardPerrito raza={element.name} tamanio={element.size} />
                  ))}
          </div>
          <Botonera />
        </main>
      </div>
    );
  }
}

export default App;
