import { useState, useEffect } from 'react'
import { HiRefresh } from 'react-icons/hi'

import CocktailElement from '@components/CocktailElement/CocktailElement'
import PageBase from '@components/PageBase/PageBase'
import Separator from '@components/Separator/Separator'
import cocktails from '@config/cocktails'
import tickSound from '@assets/audio/tick.ogg'
import ouiSound from '@assets/audio/oui.ogg'
import plopSound from '@assets/audio/plop.ogg'
import successSound from '@assets/audio/success.ogg'
import misc from '@config/misc'

import './GuessPage.scss'

const tickAudio = new Audio(tickSound)
const ouiAudio = new Audio(ouiSound)
const plopAudio = new Audio(plopSound)
const successAudio = new Audio(successSound)

const GuessPage = () => {

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
      if (Math.random() < misc.ouiChance) {
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
    let newCocktail = null
    let newFamily = null

    const getRandomCocktail = () => {
      const randomFamilyIndex = Math.floor(Math.random() * cocktails.length)
      const selectedFamily = cocktails[randomFamilyIndex]

      const randomCocktailIndex = Math.floor(Math.random() * selectedFamily.cocktails.length)

      return selectedFamily.cocktails[randomCocktailIndex]
    }

    while (newCocktail === null || newCocktail === currCocktail) {
      newFamily = cocktails[Math.floor(Math.random() * cocktails.length)]
      newCocktail = getRandomCocktail()
    }

    setCurrCocktail(newCocktail)
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
    <PageBase
      title={currCocktail?.name}
      secondary={{
        icon: <HiRefresh className='icon' />,
        onClick: pickRandomCocktail
      }}
    >
      <div id='guess-page-container'>
        <div className='guess-area padded'>
          {stepsGuess.map((step, i) => (
            <CocktailElement key={i} onClick={() => removeGuess(i)} data={step} />
          ))}
        </div>
        {stepsOptions?.length > 0 && <Separator />}
        <div className='options-area padded'>
          {stepsOptions?.map((step, i) => (
            <CocktailElement key={i} onClick={() => pickStep(step)} data={step} />
          ))}
        </div>
      </div>
    </PageBase>
  )
}

export default GuessPage