
import { Fragment, useEffect, useState } from "react"

import "./homepage.scss"
import request from "../../service/request"
import VideosCard from "../../components/cards/videosCard/VideosCard"

const HomePage = () => {

  const [data, setData] = useState([])

  useEffect(()=>{

    let params = {
      chart: "mostPopular",
      part: "contentDetails,snippet,player,id,statistics,localizations",
    }
    async function getData  () {
      try {
        let {data} = await request.get("", {params: params})
        setData(data.items)
      } catch (error) {
        alert(error)
        console.log(error);
      } finally{
        console.log("succes");
      }
    }

    getData()
  }, [])



  return (
    <Fragment>
      <section>
        <div className="container home__container">
          {data?.map((data)=><VideosCard key={data.id} data={data} />
          )}
        </div>
      </section>
    </Fragment>
  )
}

export default HomePage