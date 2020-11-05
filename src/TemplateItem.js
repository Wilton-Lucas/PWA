import React, { Component } from 'react';
import './App.css';

// importação primereact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




class Template extends Component {
    constructor(props){
        super(props);

        
    };

  
    render() {      

      if(this.props.data.tipoReceita == 1){
          return (
            <div className='item-vermelho'>                
                <div className="nome-item">{this.props.data.descricao}</div>
                <div className="dt-vencimento-item">{this.props.data.dataVencimentoFinal}</div>
                <div className="valor-item">{this.props.data.valor}</div>
                <button onClick={this.props.bind.remover}/>
            </div>
        
        );
      }else{
        return (
            <div className='item-verde'>                
                <div className="nome-item">{this.props.data.descricao}</div>
                <div className="dt-vencimento-item">{this.props.data.dataVencimentoFinal}</div>
                <div className="valor-item">{this.props.data.valor}</div>
            </div>
        
        );
      }
      

         
    }
}

export default Template;
