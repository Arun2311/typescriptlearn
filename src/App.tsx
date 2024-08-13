
import './App.css'
import { Greet } from './Component/DayTwoProps/Greet'
import { Heading } from './Component/DayTwoProps/Heading'
import { NameRender } from './Component/DayTwoProps/NameRender'
import { Oscar } from './Component/DayTwoProps/Oscar'
import { Status } from './Component/DayTwoProps/Status'

function App() {

  const personName = {
    first:"arun",
    last:"v"
  }


  const namelist = [
    {
      first:"arun",
      last:"v"
    },
    {
      first:"balaji",
      last:"v"
    },
    {
      first:"vicku",
      last:"v"
    }
  
  
  
  ]

  return (
  <div>
    {/* <DayOne/> */}

    <Greet messagecount={2} name={"Arun"}/>
    <Greet  name={"Arun"}/>

    <NameRender namelist={namelist} personName={personName}/>

    <Status statuspro='suc'/>

<Oscar>


    <Heading>Arunachalams</Heading>
    </Oscar>
  </div>
  )
}

export default App
