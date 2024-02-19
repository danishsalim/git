import {useState} from 'react'
import './UserInput.css'
import ErrorModal from '../UI/ErrorModal'
import Card from '../UI/Card'

const UserInput = (props) => {

  const [userName,setUserName] = useState('')
  const [age,setAge] = useState('')
  const [error,setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
      if(userName.trim().length==0 || age.trim().length==0 ){
        setError({
          title:"Invalid user input !",
          message:"please input  user name and age"
        })
        return
      } 
      if(age<=0){
        setError({
          title:"Invalid input !",
          message:"please input valid age (>0)!"
        })
        return
      }
      
        // eslint-disable-next-line react/prop-types
        props.user(userName,age)    
        setUserName("")
        setAge("") 
  }
  const errorHandler = () =>{
    setError(null)
  }

  return (
    <div >
     {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}/> }
      <Card className="users">
        <form onSubmit={handleSubmit}>
          <label>UserName </label>
          <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
          <label>Age (Years) </label>
          <input type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
          <button type="submit"> Submit </button>
        </form>
      </Card>
    </div>
  )
}

export default UserInput