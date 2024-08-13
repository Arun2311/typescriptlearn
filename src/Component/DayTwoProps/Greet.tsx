import React from "react"

type propstype = {
    name:string,
    messagecount?:number
}

type btnprops ={
  btnclick :(e : React.MouseEvent<HTMLButtonElement>) => void
}

type inputprops ={
  btnclick :(e : React.ChangeEvent<HTMLInputElement>) => void
}


export const Greet = (props:propstype) => {

  const {messagecount =0} = props
  return (
    <div>
        <h2>Welcome {props.name} {messagecount} message counts   </h2>

        <h3></h3>


    </div>
  )
}
