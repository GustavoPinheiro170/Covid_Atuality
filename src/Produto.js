import React from 'react';
import './app.css';

const Informacoes = ({ dados }) => {

const Timeline = (dados.data.timeline);
const latest_data = (dados.data.latest_data);



    return (
        <div>
        <div className='Info'>
        <h1 >{dados.data.name}</h1>
        <p><strong>Código :</strong> {dados.data.code}</p>
        <p><strong>Ultima Atualização :</strong>{Timeline[0].updated_at}</p>
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
        </div>
    </div>
    
    );

};

export default Informacoes;