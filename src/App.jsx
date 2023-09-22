
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PriceOption from './Component/PriceOption/PriceOption'
import LinChart from './Component/LineChart/LinChart'
import Phones from './Component/Phones/Phones'





function App() {


  return (
    <>

      <Navbar></Navbar>

      <h1 className='text-7xl'>Price option</h1>

      <PriceOption></PriceOption>
      <LinChart></LinChart>
      <Phones></Phones>
    </>
  )
}

export default App
