import styled, {css} from 'styled-components'

const container = css`
    padding: 15px;
    margin: 0 10%;
`

export const MoviePageContainer = styled.div.attrs({
    className: 'mt6 mb5',
})``

export const MoviePageBackdrop = styled.div.attrs({
    className: 'w-100 h-100 fixed top-0'
})`
    z-index: -1;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/w1280${props => props.url}}');
`

export const MovieInfoContainer = styled.div.attrs({
    className: 'flex flex-row bg-black-60 near-white'
})`
    ${container}
`

export const MovieAdditionalInfoContainer = styled.div.attrs({
    className: 'bg-black near-white f4'
})`
    ${container}
`

export const MovieActorsContainer = styled.div.attrs({
    className: 'tc black bg-white'
})`
    ${container}
`

export const MovieSectionTitle = styled.h2.attrs({
    className: 'yellow f2'
})``

export const MoviePosterImg = styled.img.attrs(({title, url })=>({
    alt: 'Poster ' + title,
    src: url?`https://image.tmdb.org/t/p/w780${url}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z',

}))`
    width: 30%;
    height: 30%;
`

export const MovieTextInfoContainer = styled.div.attrs({
    className: 'flex flex-column ma3',
})``

export const MovieTagline = styled.h4.attrs({
    className: 'f3',
})``

export const MovieInfoParagraph = styled.p.attrs({
    className: 'f4',
})``

export const RatingContainer = styled.div.attrs({
    className: 'flex flex-row',
})``

export const RatingStarIcon = styled.span.attrs({
    className: 'fa fa-star f1',
})`
    color: orange
`

export const RatingInfo = styled.p.attrs({
    className: 'ma3 f3',
})``