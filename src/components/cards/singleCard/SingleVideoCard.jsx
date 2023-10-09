import { Fragment } from "react"
import parse from "html-react-parser"


const SingleVideoCard = ({data}) => {
  console.log(data);
  return (
    <Fragment>
      <div>
        <div>
          {/* parse({data.items.[0].player.embedHtml}) */}
        </div>
      </div>
    </Fragment>
  )
}

export default SingleVideoCard