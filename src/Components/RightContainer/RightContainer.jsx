import { useState } from 'react'
import SpellsDesc from '../SpellsDesc/SpellsDesc'
import './RightContainer.scss'

const RightContainer = ({classe}) => {

  const [spellNB, setSpellNB] = useState(1)

  function spellNumber(dataNB) {
    setSpellNB(dataNB)

    document.getElementById('SpellsDesc').classList.add('active');

    document.getElementById('RightContainer').addEventListener('mouseleave', closeSpellDescription)
  }

  function closeSpellDescription() {
    document.getElementById('SpellsDesc').classList.remove('active');
    document.getElementById('RightContainer').removeEventListener('mouseleave', closeSpellDescription)

  }

  return (
    <div id="RightContainer">

      <SpellsDesc classe={classe} spellNB={spellNB} />

      <h2>Sorts de classe</h2>

      <div id="Spells">

      {Array.from({ length: 22 }, (_, i) => 
            <div className='spellContainer' key={i}>
              <img className='spellIcon' data-spellnb={((i+1)*2)-1} src={`/Classes/${classe}/Spells/${classe}${((i+1)*2)-1}.png`} onClick={() => spellNumber(((i+1)*2)-1)} />
              <img className='spellIcon' data-spellnb={((i+1)*2)} src={`/Classes/${classe}/Spells/${classe}${((i+1)*2)}.png`} onClick={() => spellNumber((i+1)*2)}  />
          </div>
        )}

      </div>

    </div>
  )
}

export default RightContainer