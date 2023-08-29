type personListProps={
    name:{
        first:string
        last:string
    }[]
}

const PersonList = (props:personListProps) => {
  return (
    <div>
      
      {props.name.map(name=>{
        return (
            <p>{name.first  } </p>
        )
      })}
    </div>
  )
}

export default PersonList
