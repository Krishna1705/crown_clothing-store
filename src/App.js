import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route,Link} from  'react-router-dom';

function Hatspage(props){
  console.log(props)
      return(
        <div>
         <h1>HatsPage</h1>

         <Link to='/'>Homepage</Link>
         <button onClick={()=>props.history.push('/')}> go to homepage</button>
        </div>
      )
}


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/hats' component={Hatspage}/>
      
    </Switch>
    </div>
  );
}

export default App;
