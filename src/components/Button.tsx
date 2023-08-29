type buttonproptype={
    handleClick:(
        event:React.MouseEvent<HTMLButtonElement>, id: number
    )=>void
}
const Button = (props:buttonproptype) => {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>click me!</button>
  )
}

export default Button
