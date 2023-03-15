import React, {useState, useEffect} from "react";
function Clock(){
    const [time, setTime] = useState(new Date().toString())

    useEffect(()=>{
        console.log(`component mounted or updated`);
        const interval = setInterval(showDate, 1000)
        return ()=>{
            console.log(`cleanup of interval`);
            clearInterval(interval)
        }
    },[time])
    function showDate(){
            setTime(new Date().toString())
    }
    
    return <>{time}</>
}

export default Clock;