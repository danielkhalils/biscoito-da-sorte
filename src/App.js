import React, { Component } from "react";
import Botao from "./components/Botao";
import './estilo.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

      this.frases = [
                    'Siga os bons e aprenda com eles',
                    'O bom senso vale mais que muitas coisas',
                    'Deixe de lado as preocupações e seja feliz',
                    'Realize o óbvio, pense no improvável e conquiste o impossível',
                    'Acredite em milagres, mas não dependa deles',
                    'A maior barreira para o sucesso é o medo do fracasso']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
          <img src={require('./assets/biscoito.png')} className="img"></img>
          <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }

}

export default App