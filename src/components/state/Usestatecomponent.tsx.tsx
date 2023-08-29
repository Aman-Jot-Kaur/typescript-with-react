import { useState } from "react"
const Logged = () => {
const [user,setUser]=useState<null| String>(null)
//HERE TYPESCRIPT WILL STOP US TO GIVE ANOTHER VALUE SAYING WHY ASSIGNING VALUE TO SOMETHING WHIOCH IS OF NULL TYPE
// TO GET RID OF THIS TYPESCRIPT INTERFERENCE, WE WILL TELL TS THAT USER CAN BE OF TYPE NULL OR TYPE STRING

// a situation like this can be solved by: const [user,setUser]=useState("" as string)
const [loggedin,setloggedin]=useState(false)
const handlelogin=()=>{
    setloggedin(true)
    setUser("new user ")
}
const handlelogout=()=>{
    setloggedin(false)
    setUser(null)
}
  return (
    <div>
      <button onClick={handlelogin}>login</button>
      <button onClick={handlelogout}>logout</button>
      <p> auth user : {user}</p>
    </div>
  )
}

export default Logged
