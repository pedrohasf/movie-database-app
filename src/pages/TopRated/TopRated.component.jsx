import React, { Fragment } from "react";
import CardList from "../../components/CardList/CardList.component.jsx";
import ButtonCategories from "../../components/ButtonCategories/ButtonCategories.component";
import {
  TopRatedContainer,
  TopRatedTitle,
  LoadMoreButton
} from "./TopRated.styles.jsx";
import FallBackPage from "../FallBackPage/FallBackPage.component";

class TopRated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      page: 1
    };
  }
  nextPage = async () => {
    await this.setState(state => ({
      page: state.page + 1
    }));
    this.getDataTopRated();
  };
  getDataTopRated = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=52b17608145274a1143f81584b638e71&language=en-US&page=${this.state.page}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(state => {
          return { info: [...state.info, ...data.results] };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  Upcoming = async () => {
    await this.setState(() => {
      return { page: 1, info: [] };
    });
    this.getDataTopRated();
  };
  componentDidMount() {
    this.getDataTopRated();
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  onSubmit = () => {
    this.props.history.push(`/search/${this.state.searchField}`);
  };
  render() {
    return (
      <Fragment>
        {this.state.info.length > 0 ? (
          <TopRatedContainer>
            <ButtonCategories category="TopRated" />
            <TopRatedTitle>Top Rated Movies</TopRatedTitle>
            <CardList object={this.state.info} />
            <LoadMoreButton onClick={this.nextPage}>Load More</LoadMoreButton>
          </TopRatedContainer>
        ) : (
          <FallBackPage />
        )}
      </Fragment>
    );
  }
}

export default TopRated;
