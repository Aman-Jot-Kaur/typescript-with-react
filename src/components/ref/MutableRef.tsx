import { useState,useRef,useEffect } from "react";
export const Mutable=()=>{
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef<number | undefined>(undefined)
    const stoptimer=()=>{
        if(intervalRef.current)
        window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return ()=>{
            stoptimer()
        }
    },[])
    return(
        <div>
            {timer}
            <button onClick={()=>stoptimer()}>stop timer</button>
        </div>
    )
}
