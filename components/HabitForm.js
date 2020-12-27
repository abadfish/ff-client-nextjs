// import { useRef, useState } from 'react'
// import Button from 'muicss/lib/react/button';
import { Field, Form } from '@leveluptuts/fresh'


const HabitForm = ({ setHabits }) => {

  // const [habit, setHabit] = useState()
  //
  // const handleOnChange = e => {
  //   const { value } = e.target
  //   setHabit(value)
  // }
  //
  // const ref = useRef()
  //
  // const saveHabit = () => {
  //   setHabits(habit)
  //   ref.current.reset()
  // }

    return (
      <Form
        onSubmit={data => {
          console.log(data)
          setHabits(prevState => [...prevState, data.habit])
        }}
        >
        <Field>Habit</Field>
        </Form>
    )
}

export default HabitForm


  // <form onSubmit={ saveHabit }>
  //   <input
  //     label='Habit'
  //     name='habit'
  //     onChange={ handleOnChange }
  //     />
