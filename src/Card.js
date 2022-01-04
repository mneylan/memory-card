const Card = (props) => {
const {name, shuffle, id, update} = props
  return (
    <div className={name} id={id} onClick={() => {
      let fruits = update(event)
      shuffle(fruits)
    }}></div>
  )
}

export default Card