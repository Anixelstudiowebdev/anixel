
import './App.css'
import MapBoxMap from './Map/MapBoxMap'

function App() {


  return ( 
    <>
   <div>
    {/* <div className='flex justify-center items-center gap-10' >
      <button onClick={() => dispatch(increment())} >
      +
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())} >
      -
      </button>
    </div> */}
    <MapBoxMap/>
   </div>

    </>
  )
}

export default App
