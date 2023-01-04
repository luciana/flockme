import React from 'react';
import './App.css';
import './Components/Item.css';
import ItemList from './Components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
          Flock me     
          <h5> We can help with Simple decisions in life. The universe is on your side!</h5>     
      </header>   
      <div className='todo-app'>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
