import { useEffect } from 'react'
import { classData } from '../../../json/classData'
import './LeftContainer.scss'

const LeftContainer = ({classe}) => {

  const length = classData[classe][0]['Difficulty']

  useEffect(() => {
    const percentShowing = document.querySelectorAll('.complete')
    const percentEmpty = document.querySelectorAll('.incomplete')

    for (let i = 0; i < percentShowing.length; i++) {
      percentShowing[i].style.width = classData[classe][0]['Types'][i] + '%';
      percentEmpty[i].style.width = (100 - classData[classe][0]['Types'][i]) + '%';
    }
  })
  
  return (
    <div id="LeftContainer">

        <div className='topDescription'>

            <img src={`./Classes/${classe}/logo.png`} className='classLogo'/>

            <div className='titles'>

                <h1>{classData[classe][0]['Name']}</h1>
                <h2>{classData[classe][0]['Title']}</h2>

                <div className='difficulty'>
                  <p>Difficulté: </p>
                  {Array.from({ length: length }, (_, i) => 
                      <span key={i} className='star active'>★</span>
                  )}
                  {Array.from({ length: 3 - length }, (_, i) => 
                      <span key={i} className='star'>★</span>
                  )}
                </div>

            </div>

        </div>

        <p className='description'>
          {classData[classe][0]['Description']}
        </p>

        <div className='bar' />

        <div className='caracteristiques'>

            <div className='carac'>

                  <div className='caracLogo' style={{backgroundPosition: `center ${classData[classe][0]['Types'][0]['bgPos']}`}} />

                  <div className='caracText'>
                      <p className='caracName'>{classData[classe][0]['Types'][0]['Name']}</p>
                      <p className='caracDesc'>{classData[classe][0]['Types'][0]['Desc']}</p>
                  </div>

            </div>

            <div className='carac'>

                  <div className='caracLogo' style={{backgroundPosition: `center ${classData[classe][0]['Types'][1]['bgPos']}`}} />

                  <div className='caracText'>
                      <p className='caracName'>{classData[classe][0]['Types'][1]['Name']}</p>
                      <p className='caracDesc'>{classData[classe][0]['Types'][1]['Desc']}</p>
                  </div>

            </div>

            <div className='carac'>

              <div className='caracLogo' style={{backgroundPosition: `center ${classData[classe][0]['Types'][2]['bgPos']}`}} />

              <div className='caracText'>
                  <p className='caracName'>{classData[classe][0]['Types'][2]['Name']}</p>
                  <p className='caracDesc'>{classData[classe][0]['Types'][2]['Desc']}</p>
              </div>

            </div>

        </div>

        
    </div>
  )
}

export default LeftContainer