import { useEffect } from 'react'
import { SpellsData } from '../../../json/SpellsData'
import './SpellsDesc.scss'

const SpellsDesc = ({classe, spellNB}) => {

    useEffect(() => {
        SpellsData[classe][spellNB]['dmg'] == '' ?
        (document.getElementById('effects').style.display = "none")
        : (document.getElementById('effects').style.display = "block")
    }, [spellNB])


  return (
    <div id="SpellsDesc">
        <div className='spellWrap'>
            <img className='spellIcon' src={`/Classes/${classe}/Spells/${classe}${spellNB}.png`} />
           <div>
                <p className='title'>{SpellsData[classe][spellNB]['title']}</p>
                <p className='cost'><span className='grey'>Coût:</span> {SpellsData[classe][spellNB]['PA']}</p>
                <p className='range'><span className='grey'>Portée:</span> {SpellsData[classe][spellNB]['PO']}</p>
            
            </div>
        </div>

        <p className='desc'>{SpellsData[classe][spellNB]['description']}</p>
        <p id='effects'><span className='effectTitle'>Effets: </span>{SpellsData[classe][spellNB]['dmg']} dommages</p>

    </div>
  )
}

export default SpellsDesc