import React, { Fragment } from 'react'
import ActorList from '../../components/ActorList/ActorList.component';
import CardList from '../../components/CardList/CardList.component.jsx'
import './Movie.styles.scss'


class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: {},
            director: '',
            actors: [],
            recommendations: []
        }
    }
    getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=52b17608145274a1143f81584b638e71&language=en-US=`)
        .then(response=> response.json()).then(data=>{
          this.setState((state)=>{
            return {info: [data][0]}
          })
        })
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=52b17608145274a1143f81584b638e71`)
        .then(response=> response.json()).then(data=>{
          let directorName
          data['crew'].map((person)=>{
            if(person['job']=== 'Director'){
               directorName =  person['name']
            }
            return true
         })
          this.setState((state)=>{
            return {actors: data['cast'], director: directorName}}
          )
        })
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/recommendations?api_key=52b17608145274a1143f81584b638e71&language=en-US&page=1`)
        .then(response=> response.json()).then(data=>{
          this.setState((state)=>{
            return {recommendations: data['results']}
          })
        })
      }
      ReleaseDate=()=>{
        let aux = this.state.info['release_date'].split('-')
        const release_date = []
        aux.map((item)=>{
          return release_date.unshift(item)
        })
        return release_date.join('/')
      }
      Budget=()=>{
        const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        return numberFormat.format(this.state.info['budget'])
      }
      componentDidMount(){
        this.getData()
      }
    render(){
        const {info, actors, director} = this.state
        return (
          <Fragment>{info.title?<Fragment>
          <div className='mt6 mb5'>
            <div className='movie-backdrop w-100 h-100 position-fixed fixed-top' style={{backgroundSize: 'cover', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/w1280/${info['backdrop_path']}')`}} />
                <div className='flex flex-row container bg-black-60 near-white'>
                <img className='poster-img' alt={`poster ${info.title}`} src={info['poster_path']?`https://image.tmdb.org/t/p/w780${info['poster_path']}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z'} />
                  <div className='flex flex-column ma3'>
                  <h2 className='yellow f2'>{info.title}</h2>
                  <h4 className='f3'>{info.tagline}</h4>
                  <p className='f4'>{info.overview}</p>
                  <p className='f4'>Genres: {info.genres?info.genres.map((genre)=>{
                    return genre['name']
                  }).join(', '):''}</p>
                  <div className='flex flex-row'><span className="fa fa-star checked f1" /><p className='ma3 f3'>{info['vote_average']?info['vote_average']+'/10':'Rating not found'}</p></div>
                  <p className='f4'>Director: {director?director:''}</p>
                </div></div>
                <div className='bg-black container near-white f4'>
                  <p>Release date: {this.ReleaseDate()}</p>
                <p>Runtime: {Math.floor(info['runtime']/60)}h {info['runtime']%60}min</p>
                  <p>Budget: {this.Budget()}</p>
                </div>
                <div className='tc container black bg-white'>
                  <h2 className='f2 yellow'>Actors</h2>
                  {actors.length>0?<ActorList object={actors} />:'No actors found'}
                  <h2 className='f2 yellow'>Recommendations</h2>
                  {this.state.recommendations.length>0?<CardList object={this.state.recommendations}/>:'No recommendations found'}
                </div>
            </div>
            </Fragment>:''
    }</Fragment>
        )
    }
}

export default Movie;