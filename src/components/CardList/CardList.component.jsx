import React from 'react';
import Card from '../Card/Card.component';
import GENRES_DATA from '../../data/Genres.data'

class CardList extends React.Component {
    getGenres=(index)=>{
        let aux, aux2, aux3
        if(!!this.props.object[index]['genre_ids']&&GENRES_DATA[0]){
          aux = GENRES_DATA.map(genre=>{
            return genre['id']
          })
            aux2 = this.props.object[index]['genre_ids'].map(item=>{
              return aux.indexOf(item)
            })
          if(aux2 && aux2[0]!==-1){
            aux3 = aux2.map(item=>{
            return GENRES_DATA[item]['name']
          })
        }
        }
      return aux3
      }
    render(){
        const { object } = this.props
        return(
            <div className='tc'>
              {object?object.map((movie, i)=>{
                    return(
                        <Card key={i} info={movie} genres={this.getGenres(i)} />
                    )
                }):''}
            </div>
        )
    }
}

export default CardList;