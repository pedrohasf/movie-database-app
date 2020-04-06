import React, { Fragment } from "react";
import CardList from "../../components/CardList/CardList.component.jsx";
import ButtonCategories from "../../components/ButtonCategories/ButtonCategories.component";
import {
  SearchPageContainer,
  SearchPageTitle,
  LoadMoreButton
} from "./SearchPage.styles.jsx";
import FallBackPage from "../FallBackPage/FallBackPage.component";

class SearchPage extends React.Component {
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
    this.getDataSearch();
  };
  getDataSearch = () => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=52b17608145274a1143f81584b638e71&language=en-US&query=${this.props.match.params.searchValue}&page=${this.state.page}&include_adult=false`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(state => {
          return { info: [...state.info, ...data.results] };
        });
      });
  };
  componentDidMount() {
    this.getDataSearch();
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  onSubmit = event => {
    this.props.history.push(`/search/${this.state.searchField}`);
  };
  render() {
    return (
      <Fragment>
        {this.state.info.length > 0 ? (
          <SearchPageContainer>
            <ButtonCategories />
            <SearchPageTitle>Search Results</SearchPageTitle>
            <CardList object={this.state.info} />
            {this.state.info.length % 20 === 0 ? (
              <LoadMoreButton onClick={this.nextPage}>Load More</LoadMoreButton>
            ) : (
              ""
            )}
          </SearchPageContainer>
        ) : (
          <FallBackPage />
        )}
      </Fragment>
    );
  }
}

export default SearchPage;
