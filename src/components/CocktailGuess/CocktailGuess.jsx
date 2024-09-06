import { useState, useEffect } from 'react'

import refreshIcon from '@assets/refreshIcon.png'
import leftArrowIcon from '@assets/leftArrow.png'
import './CocktailGuess.scss'
import CocktailElement from '@components/CocktailElement/CocktailElement'
import Separator from '@components/Separator/Separator'
import houseCocktails from '@config/houseCocktails'
import tickSound from '@assets/tick.ogg'
import ouiSound from '@assets/oui.ogg'
import plopSound from '@assets/plop.ogg'
import successSound from '@assets/success.ogg'

const tickAudio = new Audio(tickSound)
const ouiAudio = new Audio(ouiSound)
const plopAudio = new Audio(plopSound)
const successAudio = new Audio(successSound)

const CocktailGuess = ({ handleBack }) => {

  const [currCocktail, setCurrCocktail] = useState()
  const [randomSteps, setRandomSteps] = useState([])
  const [stepsGuess, setStepsGuess] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => { pickRandomCocktail() }, [])

  useEffect(() => { setIsSuccess(false) }, [currCocktail])

  useEffect(() => {
    if (currCocktail) {
      setStepsGuess(Array(currCocktail?.steps?.length).fill())
      setRandomSteps([...currCocktail?.steps]?.sort(() => Math.random() - 0.5))
    }
  }, [currCocktail?.steps])

  useEffect(() => { setIsSuccess(checkIfSuccess()) }, [stepsGuess])

  useEffect(() => {
    if (isSuccess) {
      if (Math.random() < 0.1) {
        ouiAudio.play()
      } else {
        successAudio.play()
      }
    }
  }, [isSuccess])

  const checkIfSuccess = () => {
    if (stepsGuess[stepsGuess?.length - 1]) {
      let isOk = true

      currCocktail?.steps.forEach(({ label }, i) => {
        if (stepsGuess[i]?.label !== label) { isOk = false }
      })

      return isOk
    }
  }

  const pickRandomCocktail = () => {
    setCurrCocktail(houseCocktails[Math.floor(Math.random() * houseCocktails.length)])
  }

  const pickStep = (step) => {
    const newGuesses = [...stepsGuess]

    for (let i = 0; i < stepsGuess.length; i++) {
      if (!stepsGuess[i]) {
        newGuesses.splice(i, 1, step)
        break
      }
    }

    tickAudio.play()
    setStepsGuess(newGuesses)
  }

  const removeGuess = (i) => {
    let newGuesses = [...stepsGuess]

    newGuesses[i] = null

    plopAudio.play()
    setStepsGuess(newGuesses)
  }

  const stepsOptions = randomSteps?.filter((stepOption) => {
    let isOk = true

    stepsGuess.forEach((stepGuess) => {
      if (stepGuess == stepOption) { isOk = false }
    })

    return isOk
  })

  return (
    <div id='cocktail-guess-container'>
      <div id='top-row'>
        <img onClick={handleBack} src={leftArrowIcon} />
        <span id='name' className={isSuccess ? 'success' : null}>{currCocktail?.name}</span>
        <img onClick={pickRandomCocktail} src={refreshIcon} />
      </div>
      <Separator />
      <div id='guess-area'>
        {stepsGuess.map((step, i) => (
          <CocktailElement key={i} onClick={() => removeGuess(i)} data={step} />
        ))}
      </div>
      {stepsOptions?.length > 0 && <Separator />}
      <div id='options-area'>
        {stepsOptions?.map((step, i) => (
          <CocktailElement key={i} onClick={() => pickStep(step)} data={step} />
        ))}
      </div>
    </div>
  )
}

export default CocktailGuess