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

  useEffect(() => {
    const Icons = document.querySelectorAll('.Icons')

    for (let i = 0; i < Icons.length; i++) {
      Icons[i].addEventListener('click', () => { TriggerClassChange(Icons[i].dataset.classe)})
    }
  })
  
  return (
    <div id="BottomBar">

        <div id="barContainer">

            <div id="GenderSelect">
                <a href='#' className='Gender M' onClick={() => setGender('M')}><Male /></a>
                <a href='#' className='Gender F' onClick={() => setGender('F')}><Female /></a>
            </div>

            <a className='Icons' href="#" data-classe='Osamodas' />
            <a className='Icons' href="#" data-classe='Enutrof' />
            <a className='Icons' href="#" data-classe='Sram' />
            <a className='Icons' href="#" data-classe='Xelor' />

            <a className='Icons' href="#" data-classe='Ecaflip' />
            <a className='Icons' href="#" data-classe='Eniripsa' />
            <a className='Icons' href="#" data-classe='Iop'/>
            <a className='Icons' href="#" data-classe='Cra'/>

            <a className='Icons' href="#" data-classe='Sadida'/>
            <a className='Icons' href="#" data-classe='Sacrieur'/>
            <a className='Icons' href="#" data-classe='Pandawa'/>
            <a className='Icons' href="#" data-classe='Roublard'/>

            <a className='Icons' href="#" data-classe='Zobal'/>
            <a className='Icons' href="#" data-classe='Steamer'/>
            <a className='Icons' href="#" data-classe='Eliotrope'/>
            <a className='Icons' href="#" data-classe='Huppermage'/>

            <a className='Icons' href="#" data-classe='Ouginak'/>
            <a className='Icons' href="#" data-classe='Forgelance'/>
            <a className='Icons' href="#" data-classe='Feca' />
        </div>

    </div>
  )
}

export default BottomBar