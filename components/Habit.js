import HabitButton from './HabitButton'
const Habit = ({ habit }) => {

  const dates = getLast5Days()
  console.log(dates)
    return (
        <article>
          <h3>{ habit }</h3>
          <div>
           {dates.map((d, i) => <HabitButton key={i} date={d}/>)}

          </div>
        </article>
    )
}

export default Habit

const getLast5Days = () => {
  const dates = '01234'.split('').map(d => {
    const tempDate = new Date()
    tempDate.setDate( tempDate.getDate() - d)
    return tempDate
  })
  return dates
}
