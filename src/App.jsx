import './App.scss'
import BottomBar from './Components/BottomBar/BottomBar'
import Character from './Components/Character/Character'
import RightContainer from './Components/RightContainer/RightContainer'
import LeftContainer from './Components/LeftContainer/LeftContainer'
import TopBar from './Components/TopBar/TopBar'
import { useState } from 'react'
import TransitionElement from './Components/TransitionElement/TransitionElement'
import { classData } from '../json/classData'

function App() {

  //Class active
  const [classe, setClasse] = useState('Roublard')
  const [gender, setGender] = useState('M')
  const [number, setNumber] = useState(1)

  //Handle animation when class changes
  function TriggerClassChange(className) {

    //Background selection
    setNumber(Math.floor(Math.random() * 4) +1)

    //Transition trigger
    const transitionBG = document.getElementById('transitionElement');
    transitionBG.classList.add('active')

    //Timer before reverse animation
    setTimeout(() => { 
      transitionBG.classList.remove('active')
    }
    , 2000);
    
    //Timer before class changes
    setTimeout(() => { 
      setClasse(className)
    }
    , 800);
  }

  return (
    <section id="mainWrapper" style={{backgroundImage: `url(./Classes/${classe}/1.jpg)`, backgroundColor:`${classData[classe][0]['color']}`}}>

        <TransitionElement number={number} />

        <TopBar />

        <div id="choose">
            <h1 className='hideOnMobile' >Choisissez une classe de personnage</h1>

            <img className='logoDofus showOnMobile' src={`/dofusLogo.png`} />
        </div>

        <LeftContainer classe={classe} />

        <Character classe={classe} gender={gender} />

        <RightContainer classe={classe} />

        <BottomBar TriggerClassChange={TriggerClassChange} setGender={setGender} gender={gender} />
      

    </section>
  )
}

export default App
