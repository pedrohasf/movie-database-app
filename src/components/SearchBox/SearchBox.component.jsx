  import React from 'react';

const SearchBox =({searchChange, onSubmit})=>{
        return (
        <form className='pa2' onSubmit={onSubmit}>
      <input
        className='pa3 ba b--black bg-light-yellow'
        type='search'
        placeholder='search by movie title'
        onChange={searchChange}/>
        <button type='submit' className='ba b--black bg-yellow pointer tc pa3'><i className="fa fa-search"></i></button>
        </form>
    );
}

export default SearchBox;