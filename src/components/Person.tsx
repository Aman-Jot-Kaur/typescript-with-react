import { personprop } from "./Person.types"
const Person = (props:personprop) => {
  return (
    <div>
      <h3>{props.name.first} {props.name.last} </h3>
    </div>
  )
}

export default Person
