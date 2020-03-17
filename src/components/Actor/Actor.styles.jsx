import styled from 'styled-components';

export const ActorCard = styled.div.attrs({
    className: 'tc br3 bg-moon-gray ma2 dit shadow-5 black',
})``

export const ActorImg = styled.img.attrs(({name, url })=>({
    alt: 'Actor ' + name,
    src: url?`https://image.tmdb.org/t/p/w200${url}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z'
}))``

export const ActorName = styled.h4.attrs({})``

export const ActorCharacter = styled.h6.attrs({})``