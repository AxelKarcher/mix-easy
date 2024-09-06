import './CocktailElement.scss'
import ingredients from '@config/ingredients'
import layered from '@assets/layered.png'

const CocktailElement = ({ onClick, data, label }) => {

  const img = ingredients[data?.type]?.img

  return (
    <div
      id='cocktail-element-container'
      onClick={onClick ?? null}
    >
      {img && <img className='img mr' src={img} />}
      <span>{label || data?.label}</span>
      {data?.isLayered && <img className='img ml' src={layered} />}
    </div>
  )
}

export default CocktailElement