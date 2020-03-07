import React, { Fragment } from 'react'
import CardList from '../../components/CardList/CardList.component.jsx'
import ButtonCategories from '../../components/ButtonCategories/ButtonCategories.component';
import './Upcoming.styles.scss'


class Upcoming extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          info: [],
          page: 1,
          searchField: ''
        }
      }
      nextPage = async()=>{
        await this.setState(state=>({
          page: state.page + 1
        }))
          this.getDataUpcoming()
      }
      getDataUpcoming =()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=52b17608145274a1143f81584b638e71&language=en-US&page=${this.state.page}`)
        .then(response=> response.json()).then(data=>{
          this.setState((state)=>{
            return {info: [...state.info, ...data.results]}
          })
        }).catch(function(error) {
          console.log(error);
      });
      }
      Upcoming=async()=>{
        await this.setState(()=>{
          return {page: 1, info: []}
        })
        this.getDataUpcoming()
      }
      componentDidMount(){
        this.getDataUpcoming()
      }
      onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
      }
      onSubmit=()=>{
        this.props.history.push(`/search/${this.state.searchField}`)
      }
      render(){
        return (
          <Fragment>{this.state.info.length>0?<div className='mt5'>
            <ButtonCategories category='Upcoming'/>
          <h1 className='tc f1'>Upcoming Movies</h1>
            <CardList object={this.state.info} />
            <button className='btn load-more-btn' onClick={this.nextPage}>Load More!</button></div>:<div className='mt5 vh-100'><ButtonCategories /></div>}</Fragment>
      );
    }
}

export default Upcoming