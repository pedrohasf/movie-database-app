import React, { Fragment } from "react";
import CardList from "../../components/CardList/CardList.component.jsx";
import ButtonCategories from "../../components/ButtonCategories/ButtonCategories.component";
import {
  HomePageContainer,
  HomePageTitle,
  LoadMoreButton
} from "./HomePage.styles.jsx";
import FallBackPage from "../FallBackPage/FallBackPage.component";

class HomePage extends React.Component {
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
    this.getData();
  };
  getData = () => {
    fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=52b17608145274a1143f81584b638e71&language=en&page=${this.state.page}`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => {
          return { info: [...state.info, ...data.results] };
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Fragment>
        {this.state.info.length > 0 ? (
          <HomePageContainer>
            <ButtonCategories category="Popular" />
            <HomePageTitle>Popular Movies</HomePageTitle>
            <CardList object={this.state.info} />
            <LoadMoreButton onClick={this.nextPage}>Load More</LoadMoreButton>
          </HomePageContainer>
        ) : (
          <FallBackPage />
        )}
      </Fragment>
    );
  }
}

export default HomePage;
