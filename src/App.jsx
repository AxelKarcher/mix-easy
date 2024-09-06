import { useState } from 'react'

import './App.scss'
import CocktailGuess from './components/CocktailGuess/CocktailGuess'
import CocktailsList from './components/CocktailList/CocktailsList'

function App() {

  const [mode, setMode] = useState('GUESS')

  return (
    <div id='app-container'>
      {
        mode === 'GUESS'
        ?
        <CocktailGuess handleBack={() => setMode('LIST')} />
        :
        <CocktailsList handleBack={() => setMode('GUESS')} />
      }
    </div>
  )
}

export default App
