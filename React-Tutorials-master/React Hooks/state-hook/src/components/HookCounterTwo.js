import React, {useState} from 'react'

function HookCounterTwo() {

	const initialCount = 0
	const [Count , setCount] = useState(initialCount)

	const incBySix = () => {
		for (let i=0; i<6; i++) {
			setCount (prevCount => prevCount + 1)
		}
	}
  return (
	<div>
	  Count : {Count}
	  <button onClick={()=> setCount(initialCount)}>Reset</button>
	  <button onClick={() => setCount (prevCount => prevCount + 1)}>Inc</button>
	  <button onClick={() => setCount (prevCount => prevCount - 1)}>dec</button>
	  <button onClick={incBySix}>inc6</button>
	</div>
  )
}

export default HookCounterTwo



