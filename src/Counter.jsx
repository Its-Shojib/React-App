import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    let HandleAdd = ()=>{
         let newCount = count+1;
         setCount(newCount)
    }
    let HandleReduce = ()=>{
        let reduce = count -1;
        setCount(reduce)
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h2>Counter: {count}</h2>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleReduce}>Reduce</button>
        </div>
    )
}