import {useState} from 'react'

import {MainContainer, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [unlock, setLock] = useState(false)

  const unlocked = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = unlock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const imageAltText = unlock ? 'unlock' : 'lock'

  const text = unlock ? 'Unlocked' : 'Locked'

  const buttonText = unlock ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <Image src={imageUrl} alt={imageAltText} />
      <Para>Your Device is {text}</Para>
      <Button type="button" onClick={unlocked}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
