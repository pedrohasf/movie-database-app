import  React from 'react'
import { Link } from 'react-router-dom'
import './ButtonCategories.styles.scss'

const ButtonTypes = ({category})=>{
    return (
        <ul className='btn-group flex justify-center'>
              <li><Link to={'/popular'} className={`btn ${category==='Popular'?'selected':''}`}>Popular</Link></li>
              <li><Link to={'/now_playing'} className={`btn ${category==='NowPlaying'?'selected':''}`}>Now Playing</Link></li>
              <li><Link to={'/top_rated'} className={`btn ${category==='TopRated'?'selected':''}`}>Top Rated</Link></li>
              <li><Link to={'/upcoming'} className={`btn ${category==='Upcoming'?'selected':''}`}>Upcoming</Link></li>
        </ul>
    )
}
export default ButtonTypes