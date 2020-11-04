import React, { Component } from 'react';
import './App.css';
import  api from  './API';

// importação primereact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Button} from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            financas: [],
            mes: 'Janeiro'
        };

        this.itemTemplate = this.itemTemplate.bind(this);
        this.mudarMes = this.mudarMes.bind(this);

        console.log('finanças antes =' + this.itemTemplate);

    }


    componentDidMount(){
        api.get('').then((resposta)=>{

            this.setState({financas:resposta.data});

        });


    }

    itemTemplate(data) {
        console.log('entrei kkkk')
        return (
            <div className="item">
                {console.log(data)}
                <div className="nome-item">{data.descricao}</div>
                <div className="dt-vencimento">{data.dataVencimentoFinal}</div>
                <div className="valor">{data.valor}</div>
            </div>
        );
    };

    mudarMes() {
        this.setState({mes:this.state.mes +1});
        const response = api.get('');
        console.log(response.data)
        this.setState({financas: response.data});


    };


    render() {
        return(
            <div className="App">

                <div className="App-header">
                    <h2>Finanças</h2>
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
                    {/*<div className="App-footer-row">*/}
                    {/*    <div className="App-footer-label">*/}
                    {/*        Despezas*/}
                    {/*    </div>*/}
                    {/*    <div className="App-footer-content">*/}
                    {/*        R$ 3000.00*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="App-footer-row">*/}
                    {/*    <div className="App-footer-label">*/}
                    {/*        Saldo*/}
                    {/*    </div>*/}
                    {/*    <div className="App-footer-content">*/}
                    {/*        R$ 3000.00*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>




            </div>
        );
    }
}

export default App;
