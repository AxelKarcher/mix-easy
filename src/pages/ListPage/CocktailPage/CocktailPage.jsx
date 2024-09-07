import { useLocation } from 'react-router-dom'

import PageBase from '@components/PageBase/PageBase'
import CocktailElement from '@components/CocktailElement/CocktailElement'

import './CocktailPage.scss'

const CocktailPage = () => {

  const location = useLocation()

  const cocktail = location.state?.cocktail

  return (
    <PageBase className='cocktail-page-container' title={cocktail.name}>
      <div className='list padded'>
        {cocktail.steps.map((step, i) => (
          <CocktailElement key={i} data={step} />
        ))}
      </div>
    </PageBase>
  )
}

export default CocktailPage