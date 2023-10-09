import { Link } from "react-router-dom"
import propTypes from "prop-types"

import "./videos-card.scss"
const VideosCard = ({data}) => {
  console.log(data);
  return (
    <Link to={`/watch/${data.id}`}>
      <div className="video__card">
        <div className="video__box">
          <img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
        </div>
        
        <div className="video__body">
          <div className="chanel__box">
            
          </div>
          <div className="chanel__info__box">
            <h4 className="video__title">
              {data.snippet.title}
            </h4>
            <p className="chanel__video__name">
              {data.snippet.channelTitle}
            </p>
            <p className="video__info">
              <span>{data.statistics.viewCount}</span>  •  <span>{data.statistics.likeCount} Like</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

VideosCard.propTypes = {
  data: propTypes.object,
}

export default VideosCard