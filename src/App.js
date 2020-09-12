import React from 'react';
import Informacoes from './Produto';
import './app.css';

function App() {

  const [dados, setDados] = React.useState(null);

  

  React.useEffect(() => {
    // Faz o looping no select puxando o código e nome do país
    async function NamesSelect() {
      const api = await fetch('https://corona-api.com/countries')
        .then((response) => { return response.json(); });
        const NameData = api.data;   
        NameData.forEach((item) => {
        opt.innerHTML += `<option  class='opt' value=${item.code}> ${item.name} </option>`;})}

    //inicio o fetch com o evento de click buscando pelo código do país 
    const opt = document.getElementById('options');
    opt.addEventListener('click', handleClick); 
    NamesSelect();
    
    //função que captura o value do click e coloca no fetch para buscar as informações do país 
    async function handleClick(event) {
      const response = await fetch(`https://corona-api.com/countries/${event.target.value}`
      ).then((response) => { return response; }).then((body) => { return body.json(); })
      setDados(response); 
 
    }

  }, []); 


  return (
    <div className='SelectApp'>
      <select id='options'>
        <option value='br'>SELECIONE UM PAÍS</option>
      </select>
        {dados && <Informacoes  dados={dados} />}
    </div>
  );


}

export default App;
