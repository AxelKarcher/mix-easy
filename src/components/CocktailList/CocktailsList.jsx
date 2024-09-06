import { useState } from 'react'

import './CocktailsList.scss'
import leftArrowIcon from '@assets/leftArrow.png'
import houseCocktails from '@config/houseCocktails'
import Separator from '@components/Separator/Separator'
import CocktailElement from '@components/CocktailElement/CocktailElement'

const CocktailsList = ({ handleBack }) => {

  const [selectedCocktail, setSelectedCocktail] = useState()

  return (
    <div id='cocktails-list-container'>
      <div id='top-row'>
        <img onClick={selectedCocktail ? () => setSelectedCocktail(null) : handleBack} src={leftArrowIcon} />
        <span id='name'>{selectedCocktail ? selectedCocktail.name : 'Cocktails list'}</span>
      </div>
      <Separator />
      <div id='list'>
        {
        selectedCocktail
        ?
        selectedCocktail.steps.map((step) => (<CocktailElement data={step} />))
        :
        houseCocktails.map((cocktail, i) => (
          <CocktailElement
            key={i}
            onClick={() => setSelectedCocktail(cocktail)}
            label={cocktail.name}
          />
        ))}
      </div>
    </div>
  )
}

export default CocktailsList