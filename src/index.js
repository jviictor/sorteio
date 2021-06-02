import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Switch,Route} from "react-router-dom";
import App from './App';
import Sorteio from './taskSorteio';



ReactDOM.render(
  <BrowserRouter>
      <Switch>
      <Route path="/" component={App} exact/>

    {/* <Route path="/taskSorteio/ = numero1/ = numero2/= repeticao"={Sorteio}/> */}
      <Route path="/taskSorteio/:numero1/:numero2/:repeticao" component={Sorteio}/>
      
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  
);






