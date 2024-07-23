import './TransitionElement.scss'

const TransitionElement = ({number}) => {

    
  return (
    <div id="transitionElement" style={{background: `linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.7)), url(./TransitionBGs/${number}.jpg)`}}>
        <img className='logo' src={`./dofusLogo.png`} />
    </div>
  )
}

export default TransitionElement