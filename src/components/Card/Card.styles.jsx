import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const  CardContainer = styled(Link).attrs({
    className: 'tc grow bg-light-silver br3 pa3 ma2 shadow-5 pointer dib',
    target: '_blank'
})`
    width: 15rem;
`

export const CardImg = styled.img.attrs((({info })=>({
    alt: 'Poster ' + info['title'],
    src: info['poster_path']?`https://image.tmdb.org/t/p/w200${info['poster_path']}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z'
})))`
width: 200px;
height: 300px;
`

export const CardTitle = styled.h4``

export const CardGenres = styled.p``

export const CardStar = styled.span.attrs({
    className: 'fa fa-star f3'
})`
color: orange
`

export const CardRating = styled.p``