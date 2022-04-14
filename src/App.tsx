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
  const [subNumber, setSubNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    setSubs([])
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1> nachete subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;