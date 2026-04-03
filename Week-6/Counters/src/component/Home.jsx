import { useContext } from 'react'
import { counterContextObj } from '../Context/ContextProvider'

function Home() {
  const {
    counter1, increment1, decrement1,
    counter2, increment2, decrement2,
    counter3, increment3, decrement3,
    counter4, increment4, decrement4
  } = useContext(counterContextObj)

  return (
    <div className="space-y-6 flex justify-around">
      {/* Counter 1 */}
      <div>
        <h1 className="text-2xl">Counter 1: {counter1}</h1>
        <button onClick={increment1} className="bg-green-400 px-4 py-2 mr-2">+</button>
        <button onClick={decrement1} className="bg-red-400 px-4 py-2">-</button>
      </div>

      {/* Counter 2 */}
      <div>
        <h1 className="text-2xl">Counter 2: {counter2}</h1>
        <button onClick={increment2} className="bg-green-400 px-4 py-2 mr-2">+</button>
        <button onClick={decrement2} className="bg-red-400 px-4 py-2">-</button>
      </div>

      {/* Counter 3 */}
      <div>
        <h1 className="text-2xl">Counter 3: {counter3}</h1>
        <button onClick={increment3} className="bg-green-400 px-4 py-2 mr-2">+</button>
        <button onClick={decrement3} className="bg-red-400 px-4 py-2">-</button>
      </div>

      {/* Counter 4 */}
      <div>
        <h1 className="text-2xl">Counter 4: {counter4}</h1>
        <button onClick={increment4} className="bg-green-400 px-4 py-2 mr-2">+</button>
        <button onClick={decrement4} className="bg-red-400 px-4 py-2">-</button>
      </div>
    </div>
  )
}

export default Home