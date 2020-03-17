import styled from 'styled-components'

export const SearchBoxContainer = styled.form.attrs({
    className: 'pa2',
})``

export const SearchBoxInput = styled.input.attrs({
    className: 'pa3 ba b--black bg-light-yellow',
    type: 'search',
    placeholder: 'search by movie title',
})``

export const SearchBoxButton = styled.button.attrs({
    type:'submit',
    className: 'ba b--black bg-yellow pointer tc pa3',
})``

export const SearchBoxSubmitIcon = styled.i.attrs({
    className: "fa fa-search",
})``