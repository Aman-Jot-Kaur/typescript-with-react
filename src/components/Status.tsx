type statusprops={
    status: "loading"
    error?: string
}
//instead of props i wrote values inside props
// this is called props destructuring
const Status = ({status,error}:statusprops) => {
    let message;
    if(status=== 'loading'){
        message="loading"
    }
    else{
        message=error
    }
  return (
    <div>
      status {message}
    </div>
  )
}

export default Status
