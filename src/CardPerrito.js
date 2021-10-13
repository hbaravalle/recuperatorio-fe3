import React from "react";

class CardPerrito extends React.Component {
  render() {
    return (
      <div className="perrito">
        <img src="https://via.placeholder.com/80" alt="" />
        <div>
          <h2>{this.props.raza}</h2>
          <small>{this.props.tamanio}</small>
        </div>
      </div>
    );
  }
}

export default CardPerrito;
