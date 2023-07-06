import { useReducer } from 'react'

function UserForm() {
  const [state, dispatch] = useReducer((state, action) => ({
    ...state,
    ...action,
  }),
    {
      first: "",
      last: "",
    });
  return (
    <>
      <div>
        <input type="text" value={state.first} onChange={(e) => dispatch({ first: e.target.value })} />
        <input type="text" value={state.last} onChange={(e) => dispatch({ last: e.target.value })} />
      </div>
      <div>
        First: {state.first}
      </div>
      <div>
        Last: {state.last}
      </div>
    </>
  )
}

function NameList() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        // state.name = action.payload; // 1. step
        // return state; // 2. react look for reference that's y we have to mutate all of the existing fields.
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name], name: "", }
    }
  }, {
    names: [],
    name: "",
  })

  return (
    <>
      <div className="App">
        <div>
          {state.names.map((name, index) => (
            <div key={index}>
              {name}
            </div>
          ))}
        </div>
        <input type="text" value={state.name} onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })} />
        {/* <div>
          Name = {state.name}
        </div> */}
        <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        <UserForm />
        <NameList />
      </div>
    </>
  )
}

export default App
