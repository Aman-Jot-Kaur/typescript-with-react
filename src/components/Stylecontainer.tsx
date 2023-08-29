import React from 'react'
type styleprops={
    styles:React.CSSProperties
}
const Stylecontainer = (props:styleprops) => {
  return (
    <div style={props.styles}>
      styled text
    </div>
  )
}

export default Stylecontainer
