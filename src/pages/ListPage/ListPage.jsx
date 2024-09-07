import { useNavigate } from 'react-router-dom'

import houseCocktails from '@config/houseCocktails'
import CocktailElement from '@components/CocktailElement/CocktailElement'
import PageBase from '@components/PageBase/PageBase'

import './ListPage.scss'

const ListPage = () => {

  const navigate = useNavigate()

  const handleSelectCocktail = (cocktail) => {
    navigate(`/list/${cocktail.name}`, { state: { cocktail } });
  }

  return (
    <PageBase title='Cocktails list'>
      <div className='list padded'>
        {houseCocktails.map((cocktail, i) => (
          <CocktailElement
            key={i}
            onClick={() => handleSelectCocktail(cocktail)}
            label={cocktail.name}
          />
        ))}
      </div>
    </PageBase>
  )
}

export default ListPage