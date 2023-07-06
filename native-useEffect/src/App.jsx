import { useState, useEffect } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(time);
      // setTime(time + 1);
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // }, [time]);
  }, []);

  return <div>Time: {time}</div>
}

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("../public/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  // const [selectedName, setSelectedName] = useState(null);

  // useEffect(() => {
  //   if (selectedName) {
  //     fetch(`../public/${selectedName}.json`)
  //       .then((response) => response.json())
  //       .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  const onSelectedNameChange = (name) => {
    fetch(`../public/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <>
      <div>
        <Stopwatch />
        <div>
          {names.map((name) => (
            // <button onClick={() => setSelectedName(name)}>{name}</button>
            <button onClick={() => onSelectedNameChange(name)}>{name}</button>
          ))}
        </div>
        {/* <div>{selectedName}</div> */}
        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>
    </>
  )
}

export default App
