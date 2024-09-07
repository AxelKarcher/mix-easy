import ingredients from '@config/ingredients'
import layered from '@assets/layered.png'

import './CocktailElement.scss'

const CocktailElement = ({ onClick, data, label }) => {

  const color = ingredients[data?.type]?.color

  const displayedLabel = label || data?.label

  return (
    <div
      className='cocktail-element-container row'
      style={{ borderColor: color }}
      onClick={onClick ?? null}
    >
      <span>{displayedLabel}</span>
      {data?.isLayered && <img className='img ml' src={layered} />}
    </div>
  )
}

export default CocktailElement