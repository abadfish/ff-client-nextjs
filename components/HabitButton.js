import { useState } from 'react'

const HabitButton = () => {
  const [complete, setComplete] = useState(false)
    return (
      <span>
        <button onClick={() => setComplete(!complete)}>
          {complete ? 'X' : 'O'}
        </button>
      </span>
    )
}

export default HabitButton
