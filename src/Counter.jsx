import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const countAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    }

    const countReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(
        <div style={{border: '2px solid red', padding: '15px', borderRadius: '8px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={countAdd}>Add</button>
            <button onClick={countReduce}>Reduce</button>
        </div>
    )
}