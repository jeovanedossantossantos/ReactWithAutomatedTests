import { useState } from "react";

function App() {
  const [list, setList] = useState(['Jeovane','andersonr','Maluco'])
  
  const addToList=()=>{
    setList(state=>[...state, 'Novo']);
  }

  return (
    

      <>
      
      <h1 className="teste" >Hello World</h1>
      <button onClick={()=>addToList()}>Adicionar</button>
      <ul>
        {list.map(item=> {return <li key={item}>{item}</li>})}
      </ul>
      </>
    
  );
}

export default App;
