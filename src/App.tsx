import { useEffect, useState, useRef } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

interface AppState {
  subs: Sub[],
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {

  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubNumber(n => n +1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1> nachete subs</h1>
      <List subs={subs}/>
      New subs: {newSubNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;