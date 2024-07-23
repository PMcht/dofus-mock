import { useEffect } from 'react'
import Male, { Female } from '../../../public/Gender'
import './BottomBar.scss'

const BottomBar = ( {TriggerClassChange, setGender, gender} ) => {

  useEffect(() => {
    const buttons = document.querySelectorAll('.Gender')
    const barContainer = document.getElementById('barContainer')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active')
    }
    const activeButton = document.querySelector('.' + gender)
    activeButton.classList.add('active')

    barContainer.className = gender
  }, [gender])
  
  return (
    <div id="BottomBar" className='active'>

      <h2 className='showOnMobile'>Choisissez une classe</h2>

        <div id="barContainer">

            <div id="GenderSelect">
                <a className='Gender M' onClick={() => setGender('M')}><Male /></a>
                <a className='Gender F' onClick={() => setGender('F')}><Female /></a>
            </div>

            <a className='Icons' href="#" data-classe='Osamodas' onClick={() => TriggerClassChange('Osamodas')} />
            <a className='Icons' href="#" data-classe='Enutrof' onClick={() => TriggerClassChange('Enutrof')} />
            <a className='Icons' href="#" data-classe='Sram' onClick={() => TriggerClassChange('Sram')} /> 
            <a className='Icons' href="#" data-classe='Xelor' onClick={() => TriggerClassChange('Xelor')} /> 

            <a className='Icons' href="#" data-classe='Ecaflip' onClick={() => TriggerClassChange('Ecaflip')} /> 
            <a className='Icons' href="#" data-classe='Eniripsa' onClick={() => TriggerClassChange('Eniripsa')} /> 
            <a className='Icons' href="#" data-classe='Iop' onClick={() => TriggerClassChange('Iop')} />
            <a className='Icons' href="#" data-classe='Cra' onClick={() => TriggerClassChange('Cra')} /> 

            <a className='Icons' href="#" data-classe='Sadida' onClick={() => TriggerClassChange('Sadida')} /> 
            <a className='Icons' href="#" data-classe='Sacrieur' onClick={() => TriggerClassChange('Sacrieur')} /> 
            <a className='Icons' href="#" data-classe='Pandawa' onClick={() => TriggerClassChange('Pandawa')} /> 
            <a className='Icons' href="#" data-classe='Roublard' onClick={() => TriggerClassChange('Roublard')} /> 

            <a className='Icons' href="#" data-classe='Zobal' onClick={() => TriggerClassChange('Zobal')} /> 
            <a className='Icons' href="#" data-classe='Steamer' onClick={() => TriggerClassChange('Steamer')} />
            <a className='Icons' href="#" data-classe='Eliotrope' onClick={() => TriggerClassChange('Eliotrope')} />
            <a className='Icons' href="#" data-classe='Huppermage' onClick={() => TriggerClassChange('Huppermage')} />

            <a className='Icons' href="#" data-classe='Ouginak' onClick={() => TriggerClassChange('Ouginak')} />
            <a className='Icons' href="#" data-classe='Forgelance' onClick={() => TriggerClassChange('Forgelance')} />
            <a className='Icons' href="#" data-classe='Feca' onClick={() => TriggerClassChange('Feca')} />
        </div>

    </div>
  )
}

export default BottomBar