const Shows = (props) => {
  return (
    <li className="show">
      <div className="show-info">
        <img src="{props.img}" alt="themed picture of {props.title}" />
      </div>
    </li>
  )
}

export default Shows
