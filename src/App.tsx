import { useState } from 'react';
import './App.css';
import List from './components/List'

interface Sub {
  nick: string,
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Sub[],
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [subNumber, setSubNumber] = useState<AppState["newSubsNumber"]>(0)

  return (
    <div className="App">
      <h1> nachete subs</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;