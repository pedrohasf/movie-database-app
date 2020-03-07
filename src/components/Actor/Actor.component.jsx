import React from 'react'

const Actor = ({ info } )=> {
        return (
            <div className='tc br3 bg-moon-gray ma2 dit shadow-5 black'>
                <img alt={`Actor ${info['name']}`} src={info['profile_path']?`https://image.tmdb.org/t/p/w200${info['profile_path']}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z'} />
                <h4>{info['name']}</h4>
                <h6>{info['character']}</h6>
            </div>
        )
    }

export default Actor;