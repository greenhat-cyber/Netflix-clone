import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlid,setUrlid]=useState('')
  useEffect(()=>{
    axios.get(props.urls).then(response=>{
      setMovies(response.data.results)
    })
    
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleMovie=(id)=>{
    console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  if (response.data.results.length!==0){
    setUrlid(response.data.results[0])
  }else{
    console.log("Arry Empty")
  }
})

  }
  return (
    <div className='row' >
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
            

        </div>
       { urlid && <Youtube videoId={urlid.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
