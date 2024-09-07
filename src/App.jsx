import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GuessPage from '@pages/GuessPage/GuessPage'
import ListPage from '@pages/ListPage/ListPage'
import CocktailPage from '@pages/ListPage/CocktailPage/CocktailPage'
import HomePage from '@pages/HomePage/HomePage'

import './App.scss'

const App = () => (
  <div id='app-container'>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/guess' element={<GuessPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/list/:id' element={<CocktailPage />} />
      </Routes>
    </Router>
  </div>
)

export default App
