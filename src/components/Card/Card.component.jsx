import React from 'react'
import { Link } from 'react-router-dom'
import './Card.styles.scss'

const Card =({ info, genres })=>{
        return (
            <Link to={`/movie/${info['id']}`} className='tc grow bg-light-silver br3 pa3 ma2 dib shadow-5 pointer w15' target='_blank'>
                <img  className='card-img' alt={`poster ${info['title']}`} src={info['poster_path']?`https://image.tmdb.org/t/p/w200${info['poster_path']}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z'} />
                <h4>{info['title']||info['original_name']}</h4>
                <p>{genres.length>0?genres.join(', '):'Genres not found'}</p>
                <span className="fa fa-star checked f3" /><p>{info['vote_average']?info['vote_average']+'/10':'Rating not found'}</p>
            </Link>
        )
    }

export default Card;