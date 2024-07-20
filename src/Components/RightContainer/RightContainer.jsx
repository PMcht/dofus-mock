import './RightContainer.scss'

const RightContainer = ({classe}) => {

  return (
    <div id="RightContainer">

      <h2>Sorts de classe</h2>

      <div id="Spells">

      {Array.from({ length: 22 }, (_, i) => 
            <div className='spellContainer' key={i}>
              <img className='spellIcon' src={`/Classes/${classe}/Spells/${classe}${((i+1)*2)-1}.png`} />
              <img className='spellIcon' src={`/Classes/${classe}/Spells/${classe}${((i+1)*2)}.png`} />
          </div>
        )}

      </div>



    </div>
  )
}

export default RightContainer