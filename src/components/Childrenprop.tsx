 import React from 'react'
 type childproptype={
    children: string
 }
 const Childrenprop = (props:childproptype) => {
   return (
     <div>
       {props.children}
     </div>
   )
 }
 
 export default Childrenprop
 