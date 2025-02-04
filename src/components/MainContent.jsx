import shows from '../data'
import Shows from './Shows'

const MainContent = () => {
  return (
    <div className="main flex-center">
      {shows.map((show, index) => (
        <Shows key={index} show={show} />
      ))}
    </div>
  )
}
export default MainContent
