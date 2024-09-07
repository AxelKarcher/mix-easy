import { useNavigate } from 'react-router-dom'

import cocktails from '@config/cocktails'
import CocktailElement from '@components/CocktailElement/CocktailElement'
import PageBase from '@components/PageBase/PageBase'

import './ListPage.scss'

const ListPage = () => {

  const navigate = useNavigate()

  const handleSelectCocktail = (cocktail) => {
    navigate(`/list/${cocktail.name}`, { state: { cocktail } })
  }

  return (
    <PageBase title='Cocktails list'>
      <div className='list padded'>
        {cocktails.map(({ familyName, cocktails }, i) => (
          <div key={i}>
            <span>{familyName}</span>
            {cocktails.map((cocktail, j) => (
              <CocktailElement
                key={j}
                onClick={() => handleSelectCocktail(cocktail)}
                label={cocktail.name}
              />
            ))}
          </div>
        ))}
      </div>
    </PageBase>
  )
}

export default ListPage