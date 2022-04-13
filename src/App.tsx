import { useState } from 'react';
import './App.css';

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
      <ul>
        {
          subs.length === 0 ? <div>loading....</div> :
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;