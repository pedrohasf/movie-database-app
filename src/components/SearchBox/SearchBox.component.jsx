  import React from 'react';
  import {SearchBoxContainer, SearchBoxInput, SearchBoxButton, SearchBoxSubmitIcon} from './SearchBox.styles'

const SearchBox =({searchChange, onSubmit})=>{
        return (
        <SearchBoxContainer onSubmit={onSubmit}>
          <SearchBoxInput onChange={searchChange}/>
          <SearchBoxButton><SearchBoxSubmitIcon /></SearchBoxButton>
        </SearchBoxContainer>
    );
}

export default SearchBox;