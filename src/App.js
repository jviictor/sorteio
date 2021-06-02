import {Link, useHistory} from "react-router-dom";
import React ,{useState} from 'react';
import "./Style.css";
import { Button } from 'semantic-ui-react';


function App() {
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  let [check, setChecked] = useState(false);
  let history = useHistory();
  




  function Caixa() {
      
    return (
      <label>
        <input id="check" type="checkbox"
          defaultChecked={check}
          onChange={() => setChecked(!check)}
          
        />
        Não repetir numeros!
      </label>
    );
  }

    const handleRequest = (num1, num2, check) => {
      history.push({
        pathname: '/taskSorteio/',
        state: { numero1: num1, numero2: num2, boleano: check},
        
      });
    };

  const Alerta = () =>{
    alert("algo errado, Tente novamente!.");
  }

  function InputBotao(){
    var botao;
    if(!isNaN(num1) && !isNaN(num2) && num1 !== "" && num2 !== ""){
      botao = <Link to={`/taskSorteio/${num1}/${num2}/${check}`}>
                <Button onClick={() => handleRequest(num1,num2,check)} className="btnClass" >Confirmar</Button>
              </Link>
              
    }else{
      botao = <button onClick={Alerta}  className="btnClass">Confirmar</button>;
    }
    return(
      botao
    );
    
  }

  return (
    <div id="divTelaConfig">
      
      <h1 id="telaS">Tela Sorteio</h1>
      <label id="labNumero">Primeiro numero:</label>
      <input value={num1} onChange={(evt1) => setNum1(evt1.target.value)} id="inputNum1" type="number" placeholder="Número menor"></input>
      <label>Segundo numero:</label>
      <input value={num2} onChange={(evt2) => setNum2(evt2.target.value)} type="number" placeholder="Número máximo"></input>
      <br></br>
      <br></br>
      <div id="btn1">
      <InputBotao />
      <br></br>
      <Caixa />
      </div>
    </div>
  );
};
export default App;
