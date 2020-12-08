import Habit from './Habit'

const HabitList = ({ habits }) => {
    return (
      <section>
        <h2>My Habits</h2>
        { habits.map((h, i) => (
          <Habit key={i} habit={h} />
        ))}

      </section>
    )
}

export default HabitList
