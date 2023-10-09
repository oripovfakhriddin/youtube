import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import request from "../../service/request"

import SingleVideoCard from "../../components/cards/singleCard/SingleVideoCard"

const WatchPage = () => {
  const { videoId } =useParams()
  const [data, setData] = useState()
  useEffect(()=>{

    let params = {
      part: "snippet,player",
      id: videoId,
    }
    async function getData  () {
      try {
        let {data} = await request.get("", {params: params})
        setData(data.items[0])
      } catch (error) {
        alert(error)
        console.log(error);
      } finally{
        console.log("Succes");
      }
    }

    getData()
  }, [videoId])


  return (
    <Fragment>
      <section>
        <SingleVideoCard {...data}/>
      </section>
    </Fragment>
  )
}

export default WatchPage