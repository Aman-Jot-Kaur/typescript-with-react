type proptype={
    children:React.ReactNode
}

const Parent = (props:proptype) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Parent
