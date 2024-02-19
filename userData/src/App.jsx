
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'
import './App.css'
import Card from './UI/Card'
import { useState } from 'react'


function App() {
  const [usersList,setUsersList] =useState([])

  const userDetail =(userName,age)=>{
      setUsersList((prevUsers)=>{
        return [...prevUsers,{userName:userName,age:age,id:Math.random().toString()}]
      })
    }
  return (
    <>
        < UserInput user = {userDetail} />
      <Card>
        <UserOutput users={usersList}/>
      </Card>
    </>
    
      
   
  )
}

export default App
