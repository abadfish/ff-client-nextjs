import HabitButton from './HabitButton'
const Habit = ({ habit }) => {
    return (
        <article>
          <h3>{ habit }</h3>
          <div>
            <HabitButton />
            <HabitButton />
            <HabitButton />
            <HabitButton />
            <HabitButton />
          </div>
        </article>
    )
}

const getLast5Days = () => {

}

export default Habit
