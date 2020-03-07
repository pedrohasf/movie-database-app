import React, { Fragment } from 'react'
import CardList from '../../components/CardList/CardList.component.jsx'
import ButtonCategories from '../../components/ButtonCategories/ButtonCategories.component';
import './HomePage.styles.scss'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          info: [],
          page: 1,
          category: 'Popular',
          searchField: ''
        }
      }
      nextPage=async()=>{
        await this.setState(state=>({
          page: state.page + 1
        }))
          this.getData()
      }
      getData=()=>{
        fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=52b17608145274a1143f81584b638e71&language=en&page=${this.state.page}`)
        .then(response=> response.json()).then(data=>{
          this.setState((state)=>{
            return {info: [...state.info, ...data.results]}
          })
        })
      }
      componentDidMount(){
        this.getData()
      }
      render(){
        return (
          <Fragment>{this.state.info.length>0?<div className='mt5'>
            <ButtonCategories category='Popular'/>
          <h1 className='tc f1'>Popular Movies</h1>
            <CardList object={this.state.info} />
            <button className='btn load-more-btn' onClick={this.nextPage}>Load More!</button></div>:<div className='mt5 vh-100'><ButtonCategories /></div>}</Fragment>
      );
    }
}

export default HomePage