import React, { Component } from 'react';
import { runInThisContext } from 'vm';

export default class saudacao extends Component {
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  };

  setTipo(e) {
    this.setState({ tipo: e.target.value });
  }
  setNome(e) {
    this.serState({ tipo: e.target.value });
  }
  render() {
    const { tipo, nome } = this.state;
    return (
      <div>
        <h1>
          {tipo}
          {nome}
        </h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onCharge={e => this.setTipo(e)} />
        <input type="text" placeholder="Nome..." value={nome} onCharge={e => this.setNome(e)} />
      </div>
    );
  }
}
