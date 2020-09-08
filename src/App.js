import React from 'react';
import Informacoes from './Produto';
import './app.css';

function App() {
  
  const [dados, setDados] = React.useState(null);

  async function handleClick(event){
     const response = await fetch(`https://corona-api.com/countries/${event.target.value}`
     ).then((response) => { return response; } ).then((body) => { return body.json();})
      setDados(response);
  }


  React.useEffect(() => {
    async function NamesSelect(){
    const api =  await fetch('https://corona-api.com/countries')
    .then((response) => { return response.json();});
    const NameData = api.data;
    NameData.forEach((item) => {  document.getElementById('options').innerHTML += `<option value=${item.code}> ${item.name} </option>`; })
    }
    NamesSelect();
});

 return (
<div className='SelectApp'>
        <select id='options' onClick={handleClick}>
         <option value='br'>SELECIONE UM PAÍS</option>
         </select> 
          {dados && <Informacoes dados={dados} />}
  
  </div>
  );
}

export default App;
