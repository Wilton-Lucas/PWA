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

      const classe = '';

      if(this.props.data.tipoReceita == 1){
          return (
            <div className='item-vermelho'>                
                <div className="nome-item">{this.props.data.descricao}</div>
                <div className="dt-vencimento">{this.props.data.dataVencimentoFinal}</div>
                <div className="valor">{this.props.data.valor}</div>
            </div>
        
        );
      }else{
        return (
            <div className='item-verde'>                
                <div className="nome-item">{this.props.data.descricao}</div>
                <div className="dt-vencimento">{this.props.data.dataVencimentoFinal}</div>
                <div className="valor">{this.props.data.valor}</div>
            </div>
        
        );
      }
      

         
    }
}

export default Template;
