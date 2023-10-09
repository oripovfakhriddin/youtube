import { Fragment } from "react"
import propTypes from "prop-types"
// import parse from "html-react-parser"


const SingleVideoCard = () => {
  // console.log("items");
  // console.log(player);
  // console.log(data.player.embedHtml);
  // console.log(parse(data.player.embedHtml));
  return (
    <Fragment>
      <div>
        <div>
          <h1>Pages</h1>
          {/* {parse(player.embedHtml)} */}
        </div>
      </div>
    </Fragment>
  )
}


SingleVideoCard.propTypes = {
  player: propTypes.object
}

export default SingleVideoCard