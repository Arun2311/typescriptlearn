

type child = {
    children:string
}
export const Heading = (props:child) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}
