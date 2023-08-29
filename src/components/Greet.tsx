type GreetProps={
    name: string
    message?:string//optional prop
}

const Greet = (props: GreetProps) => {
     //giving a default value to a prop
    //if message has already a value,assign it otherwise give value 0
    const { message = 'Default message if not provided' } = props;
  return (
   
   
    
    <div>
      <h1>hi! {props.name}</h1>
      {message}
    </div>
  )
}

export default Greet
