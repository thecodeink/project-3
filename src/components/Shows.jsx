const Shows = ({ show }) => {
  return (
    <div className="show flex-containers">
      <img className="image-photo" src={show.img} alt="" />
      <div className="show-info">
        <h5>{show.title}</h5>
        <h5>First Aired: {show.firstAired}</h5>
        <h5>Seasons: {show.seasons}</h5>
      </div>
    </div>
  )
}

export default Shows
