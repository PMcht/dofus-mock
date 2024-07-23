import { useEffect } from 'react'
import './BottomBar.scss'

const Male = () => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 432.5 432.5" xmlSpace="preserve">
        <g>
            
                <path fill="none" stroke='#000000' strokeWidth='50' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='133.3333' d="
                M310.4,357.8c-23.1,23-52.5,38.6-84.5,44.7c-32.2,6.2-65.6,2.8-95.9-9.9C68,366.7,27.4,306.2,26.8,239
                c-0.3-49.4,21.7-96.4,60-127.7s88.6-43.7,137-33.6c31.9,7.2,61,23.7,83.5,47.4c31.6,30.3,49.9,72,50.9,115.8
                C358.5,284.7,341.3,326.8,310.4,357.8z"/>
            <path d="M289.7,107.5c-9.8,9.8-9.8,25.6,0,35.4c9.8,9.8,25.6,9.8,35.4,0L289.7,107.5z M423.7,44.1c9.8-9.8,9.8-25.6,0-35.4
                C414-1,398.1-1,388.4,8.8L423.7,44.1z M328.1,1c-13.8-0.1-25.1,11-25.2,24.8s11,25.1,24.8,25.2L328.1,1z M405.9,51.5
                c13.8,0.1,25.1-11,25.2-24.8s-11-25.1-24.9-25.2L405.9,51.5z M431,26.3c0-13.8-11.3-24.9-25.1-24.8c-13.8,0-24.9,11.3-24.9,25.1
                L431,26.3z M381.5,104.7c0.1,13.8,11.3,24.9,25.2,24.8c13.8-0.1,24.9-11.3,24.8-25.2L381.5,104.7z M325,142.8l98.7-98.7L388.4,8.8
                l-98.7,98.7L325,142.8z M327.8,51l78.1,0.5l0.3-50L328.1,1L327.8,51z M381,26.6l0.5,78.1l50-0.3L431,26.3L381,26.6z"/>
        </g>
        </svg>
  )
}

const Female = () => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 522.3 522.3"  xmlSpace="preserve">
   <g>
       
           <path fill="none" stroke="#000000" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="133.3333;" d="
           M94.6,193.3c0-32.6,9.8-64.4,28.1-91.4c18.4-27.2,44.4-48.4,74.8-60.8c62.2-25.5,133.7-11.5,181.6,35.7
           c35.2,34.7,52.8,83.5,47.9,132.7s-31.8,93.5-73.1,120.6c-27.7,17.4-59.9,26.3-92.6,25.5c-43.8,0.9-86.2-15.6-117.9-45.9
           C112.2,279,94.6,237.1,94.6,193.3z"/>
       <path d="M286.2,355.6c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25H286.2z M236.2,428.6c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25
           H236.2z M327.9,453.6c13.8,0,25-11.2,25-25s-11.2-25-25-25V453.6z M261.2,403.6c-13.8,0-25,11.2-25,25s11.2,25,25,25V403.6z
            M236.2,495.2c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25H236.2z M286.2,428.6c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25H286.2z
            M261.2,453.6c13.8,0,25-11.2,25-25s-11.2-25-25-25V453.6z M194.6,403.6c-13.8,0-25,11.2-25,25s11.2,25,25,25V403.6z M236.2,355.6
           v72.9h50v-72.9H236.2z M327.9,403.6h-66.7v50h66.7L327.9,403.6L327.9,403.6z M286.2,495.2v-66.7h-50v66.7H286.2z M261.2,403.6
           h-66.7v50h66.7V403.6z"/>
   </g>
   </svg>
    )
  }
  

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