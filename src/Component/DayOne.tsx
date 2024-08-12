import { useState } from "react"

export default function DayOne() {
    const [count,setcount] = useState <number>(4)

const handladd= ():void=>{
    setcount(count +1)

}
  return (
    <div>

        <h1>Type Script Counter</h1>
        <h1>{count}</h1>

        <button onClick={handladd}>Add</button>
        
    </div>
  )
}
