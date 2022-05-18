import { useState } from "react";

function App() {
  const [list, setList] = useState(['Jeovane','andersonr','Maluco'])
  const [newItem,setNewItem] = useState('')

  function addToList(){
    setTimeout(() =>{
      setList(state=>[...state, newItem]);
    },500)
  }
  function removeFromList(item:string){
    setTimeout(() =>{
      setList(state=> state.filter(item=> item !=item));
    },500)
  }

  return (
    

      <>
      
      <h1 className="teste" >Hello World</h1>
      <input placeholder="Novo item" value={newItem} onChange={e=>setNewItem(e.target.value)}/>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item=>  <li key={item}>{item}
          <button onClick={e=>removeFromList(item)}>Remover</button>
        </li>)}
      </ul>
      </>
    
  );
}

export default App;
