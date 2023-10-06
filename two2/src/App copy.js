// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [list, setlist]=useState([])
  const[userinput, setuserinput]=useState('')
  
  function additem(){
    const templist= [...list]
    templist.push(userinput)
    setlist(templist)
    setuserinput('')
  }
  function added(index){
    setuserinput(list[index])
  }
  
  function updatetinputstate(e){
    setuserinput(e.target.value)
  }
  function deletitem(index){
    const templist=[...list]
    templist.splice(index,1)
    setlist(templist)
    
  }
  
   return (
    <div className="App">
      <header className="App-header">

      


        <input value={userinput} onChange={updatetinputstate}placeholder='Enter any item'/>
        <button onClick={additem}>add item</button>
        <ul>
           {list.map(function(item,index){
            return<li>{item}
          <button onClick={()=>deletitem(index)}>delete</button>
          <button onClick={()=>added(index)}>added</button>
          
           
            </li>
          })}
        </ul>
    </header>
     </div>
  );
}

export default App;