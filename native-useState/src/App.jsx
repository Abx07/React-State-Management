import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(["Abdulbaqui", "Hamza", "Sufiyan"]);
  const [name, setName] = useState(() => "Abdulbaqui");

  const onAddName = () => {
    // list.push(name);
    setList([...list, name]);
    setName("");
  }

  return (
    <>
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={onAddName}>Add Name</button>
    </div>
    </>
  )
}

function Counter() {

  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
    // count++;
  }

  return (
    <>
      <div className='App' onClick={addOne} >
        <button>Count = {count}</button>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        <Counter />
        <NameList />
      </div>
    </>
  )
}

export default App
