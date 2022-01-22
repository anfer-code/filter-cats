import React, {useState, createContext} from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import data from './assets/datajson.json'
import './App.css';


const arr = data.filter((el, index) => {
  if(index >= 50) return false 
  else return el})
  const Context = createContext();


function App() {
  const [renderArray, setRenderArray] = useState(arr);
  const [filterArray, setFilterArray] = useState(arr)

  return (
    <div className="App">
      <Context.Provider value={{
        renderArray, 
        setRenderArray,
        filterArray,
        setFilterArray
      }}>
        <Aside />
        <Main />
      </Context.Provider>
    </div>
  );
}

export { App, Context};
