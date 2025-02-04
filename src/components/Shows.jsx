const Shows = ({ show }) => {
  return (
    <div className="show">
      <img className="image-photo" src={show.img} alt={show.title} />
      <div className="show-info">
        <h5>{show.title}</h5>
        <h5>First Aired: {show.broadcast.firstAired}</h5>
        <h5>Seasons: {show.seasons}</h5>
      </div>
    </div>
  )
}

export default Shows
