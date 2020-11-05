import React, { Component } from 'react';
import './App.css';
import  api from  './API';
import Template from './TemplateItem';

// importação primereact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Button} from 'primereact/button';
import { DataView } from 'primereact/dataview';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            meses : ['Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
            ],

            financas: [],
            mesSelecionado: 0,
        };

        this.itemTemplate = this.itemTemplate.bind(this);
        this.mudarMesDecremento = this.mudarMesDecremento.bind(this);
        this.mudarMesIncremento = this.mudarMesIncremento.bind(this);
        this.adicionarFinanca = this.adicionarFinanca.bind(this);
        this.atualizarFinancasAPI = this.atualizarFinancasAPI.bind(this);


        console.log('finanças antes =' + this.itemTemplate);

    }


    componentDidMount(){
        this.atualizarFinancasAPI();
    }

    atualizarFinancasAPI(){
      api.get('').then((resposta)=>{

            this.setState({financas:resposta.data});

      });
        this.setState({mes:0});
      
    }

    itemTemplate(data) {        
        return (
            <Template data={data} />
        );
    };

    mudarMesIncremento() {
      console.log('mudou');
        if(this.state.mes + 1 <=11){
          this.setState({mes:this.state.mes +1});
        }else{
          this.setState({mes:0});
        }
    };

     mudarMesDecremento() {

        if(this.state.mes - 1 >=0){
          this.setState({mes:this.state.mes -1});
        }else{
          this.setState({mes:11});
        }
    };

    adicionarFinanca(){
      
      const novo =  {
                      "id": "15",
                      "descricao": "conta de luz",
                      "dataVencimentoInicial": "20/10/2020",
                      "dataVencimentoFinal": "20/10/2020",
                      "tipoReceita": 1,
                      "valor": "19.85",
                      "parcelasQtd": 1
                    };

      const fnovo = this.state.financas;
      fnovo.push(novo);
      console.log(fnovo);
      this.setState({financas: fnovo});
    }

    render() {
        return(
            <div className="App">

                <div className="App-header">
                    <h2>Finanças</h2>
                    <Button label="+" onClick={this.adicionarFinanca}/>

                </div>

                <div className="App-month">
                    <ul className="nav">
                        <li><Button label="<" onClick={this.mudarMesDecremento}/></li>
                        <li><h3> {this.state.meses[this.state.mes]}  </h3></li>
                        <li><Button label=">" onClick={this.mudarMesIncremento}/></li>
                    </ul>

                </div>

                <div className="App-content">
                    <DataView  value={this.state.financas} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" />
                </div>

                <div className="App-footer">
                    <div className="App-footer-row">
                        <div className="App-footer-label">
                            <div>Receitas</div>
                            <div>Despezas</div>
                                <div>Saldo</div>
                        </div>
                        <div className="App-footer-content">
                             <div>R$ 3000.00</div>
                            <div>R$ 3000.00</div>
                            <div>R$ 3000.00</div>
                        </div>
                    </div>
                    
                </div>




            </div>
        );
    }
}

export default App;
