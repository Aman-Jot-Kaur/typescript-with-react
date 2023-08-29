import React from 'react'
type inputproptype={
    value:string
    handleChange:(
        event:React.ChangeEvent<HTMLInputElement>)=> void
    
}
const Input = (props:inputproptype) => {
  return (
   <input type="text" value={props.value} onChange={props.handleChange}/>
  )
}

export default Input
