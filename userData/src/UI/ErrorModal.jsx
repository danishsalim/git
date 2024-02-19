/* eslint-disable react/prop-types */

import Card from './Card'
import './errorModal.css'
const ErrorModal = (props) => {
  return (
    <div>
      <div className ='backdrop' onClick={props.errorHandler}>
          <Card className='modal'>
            <header className='header'>
              <h2>{props.title}</h2>
            </header>
            <div className='content'>
              <p>{props.message}</p>
            </div>
            <footer className='actions'><button onClick={props.errorHandler}>okay</button></footer>     
          </Card>
      </div>
    </div>
   
    
  )
}

export default ErrorModal