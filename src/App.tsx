import { useEffect, useState } from 'react';
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


  useEffect(()=> {
    setSubs([])
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
      <h1> nachete subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;