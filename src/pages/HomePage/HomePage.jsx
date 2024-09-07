import { useNavigate } from 'react-router-dom'
import { FaCocktail } from 'react-icons/fa'
import { GiCook } from 'react-icons/gi'

import SquareBtn from './SquareBtn/SquareBtn'

import './HomePage.scss'

const btnsMap = [
  {
    icon: <FaCocktail className='icon' />,
    path: '/list'
  },
  {
    icon: <GiCook className='icon' />,
    path: '/guess'
  },
]

const HomePage = () => {

  const navigate = useNavigate()

  const moveToPath = (path) => { navigate(path) }

  return (
    <div className='home-page-container'>
      <span id='title'>Mix Easy</span>
      <div id='square-areas'>
        {btnsMap.map(({ icon, path}, i) => (
          <SquareBtn key={i} icon={icon} onClick={() => moveToPath(path)} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
