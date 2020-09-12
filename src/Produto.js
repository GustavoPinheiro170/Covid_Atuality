import React from 'react';
import './app.css';

const Informacoes = ({ dados }) => {

    const latest_data = (dados.data.latest_data);
    const today = (dados.data.today);


    return (
        <div className='selectCovid'>
            <div className='Info'>
                <h1 >{dados.data.name}</h1>
                <p><strong>Código :</strong> {dados.data.code}</p>
            </div>


            <div className='Recover'>
                <h4>Casos Recuperados</h4>
                <p><strong>Total de recuperados :</strong> {latest_data.recovered}</p>
                <p><strong>População: </strong>{dados.data.population}</p>
            </div>
            <div className='Critical'>
                <h4>Óbitos | Novos Casos</h4>
                <p><strong>Total de confirmados : </strong>{latest_data.confirmed}</p>
                <p><strong>Total de mortes :</strong> {latest_data.deaths}</p>
                <p><strong>Estado Crítico :</strong> {latest_data.critical}</p>
                <h4> {Date()}</h4>
                <p><strong>Mortes :</strong> {today.deaths}</p>
                <p><strong>Confirmados :</strong> {today.confirmed}</p>
            </div>
            <div className='OutrasInfo'>
                <h4>Outras informações</h4>
                <p><strong>Casos por milhão :</strong>{latest_data.calculated.cases_per_million_population}</p>
                <p><strong>índice de mortalidade :</strong>{latest_data.calculated.death_rate}%</p>
            </div>
            <div>



            </div>
        </div>

    );

};

export default Informacoes;