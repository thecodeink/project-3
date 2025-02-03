const Shows = ({ show }) => {
  return (
    <ol className="show">
      <div className="show-info">
        <h5>{show.title}</h5>
        <h5>First Aired: {show.firstAired}</h5>
        <h5>Seasons: {show.seasons}</h5>
      </div>
      <img className="image-photo" src={show.img} alt="" />
    </ol>
  )
}

export default Shows
