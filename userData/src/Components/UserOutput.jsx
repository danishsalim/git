
const UserOutput = (props) => {
  return (
    <div>
        <ul>
            {
             // eslint-disable-next-line react/prop-types
             props.users.map((user)=>(
              <li key={user.id}  > 
                {user.userName} ({user.age} years old)
              </li>
             ))
            }
        </ul>
    </div>
  )
}

export default UserOutput