import logo from './logo.svg';
import './App.css';
import Input from './Input';
import {useState} from "react";
import List from './List';
import {useCallback} from "react";
function App() {
  const[data,changeData]=useState([]);
  const name="Aayush";
  function getData(value)
  {
   
     changeData((prev)=>{
       return [...prev,value]
     })
  }
  return (
    <div><h1>hello</h1>
    <Input getData={getData}/>
    <List list={data}/>
    </div>
  );
}

export default App;
