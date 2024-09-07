import ingredients from '@config/ingredients'
import layered from '@assets/layered.png'

import './CocktailElement.scss'

const CocktailElement = ({ onClick, data, label }) => {

  const color = ingredients[data?.type]?.color
  const img = ingredients[data?.type]?.img

  const displayedLabel = label || data?.label

  return (
    <div
      className='cocktail-element-container row'
      style={{ borderColor: color }}
      onClick={onClick ?? null}
    >
      {img && <img className='img mr' src={img} />}
      <span>{displayedLabel}</span>
      {data?.isLayered && <img className='img ml' src={layered} />}
    </div>
  )
}

export default CocktailElement