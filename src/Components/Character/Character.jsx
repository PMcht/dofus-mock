import { useState } from 'react'
import './Character.scss'

const Character = ({classe, gender}) => {

  const [pos, setPos] = useState(1)

  function changePos (increment) {
    let newPos = pos + increment
    if(newPos > 8) {
      newPos = 1
    } else if (newPos < 1){
      newPos = 8
    }
    setPos(newPos)
  }

  return (
    <div className='CharacterWrapper'>

        <a className='Arrows' onClick={() => changePos(+1)}>↶</a>

        < img src={`./Classes/${classe}/Character/${gender + pos}.png`} className='Character' />

        <a className='Arrows' onClick={() => changePos(-1)}>↷</a>

    </div>
  )
}

export default Character