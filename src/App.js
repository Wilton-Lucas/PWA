import React from 'react';
import './App.css';
import  api from  './API';

// importação primereact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Button} from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';


class App extends React.Component {
  constructor(props){
    super(props);    

    this.state = {      
      financas: [
        
          {
            "id": "1",
            "descricao": "conta de luz",
            "dataVencimento": "20/10/2020",
            "tipoReceita": 1,
            "valor": "19.85",
            "parcelasQtd": 1
          },
          {
            "id": "2",
            "descricao": "Caiu salário",
            "dataVencimentoInicial": "20/10/2020",
            "dataVencimentoFinal": "20/10/2020",
            "tipoReceita": 2,
            "valor": "2000.0",
            "parcelasQtd": 1
          },
          {
            "id": "3",
            "descricao": "Fatura Nubank",
            "dataVencimentoInicial": "20/10/2020",
            "dataVencimentoFinal": "20/1/2021",
            "tipoReceita": 1,
            "valor": "6000.0",
            "parcelasQtd": 3
          }


      ],
    };

    console.log('finanças antes =' + this.state.financas);

  }


  componentDidMount(){        

  
   api.get('').then((resposta)=>{
        
        this.setState({financas:resposta.data});
         console.log(this.state.financas[0].descricao);

   });
   console.log('finanças dps1 =' + this.state.financas);
  }

  itemTemplate = (data)=> {
    return (         
        <div className="item">   
            
          <div className="nome-item">{data.descricao}</div>
          <div className="dt-vencimento">{data.dataVencimentoFinal}</div>
          <div className="valor">{data.valor}</div>                  
        </div>
    );
  };

  mudarMes = ()=> {      
    this.setState({mes:this.state.mes +1});  
    const response = api.get('');  
    console.log(response.data)    
    this.setState({financas: response.data});  
    

  };
  

  render() {
    return(
        <div className="App">
          
          <div className="App-header">
              <h2>Finanças{this.state.financas[0].descricao}</h2>
              <Button label="+" />
              
          </div>
          
          <div className="App-month">
              <ul className="nav">
                  <li><Button label="<"/></li>
                  <li><h3> {this.state.mes}  </h3></li>
                    <li><Button label=">" onClick={this.mudarMes}/></li>
              </ul>

          </div>
          
          <div className="App-content">
              <DataScroller value={this.state.financas} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" />
          </div>

          <div className="App-footer">
          Receitas - R$ 3000.00
          Despezas - R$ 3000.00
          Saldo  -   R$ 3000.00
          
          </div>

         

          
        </div>
    );
  }
}

export default App;
