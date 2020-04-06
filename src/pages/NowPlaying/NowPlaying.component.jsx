import React, { Fragment } from "react";
import CardList from "../../components/CardList/CardList.component.jsx";
import ButtonCategories from "../../components/ButtonCategories/ButtonCategories.component";
import {
  NowPlayingContainer,
  NowPlayingTitle,
  LoadMoreButton
} from "./NowPlaying.styles.jsx";
import FallBackPage from "../FallBackPage/FallBackPage.component";

class NowPlaying extends React.Component {
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
    this.getDataNowPlaying();
  };
  getDataNowPlaying = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=52b17608145274a1143f81584b638e71&language=en-US&page=${this.state.page}`
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
  NowPlaying = async () => {
    await this.setState(() => {
      return { page: 1, info: [] };
    });
    this.getDataNowPlaying();
  };
  componentDidMount() {
    this.getDataNowPlaying();
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
          <NowPlayingContainer>
            <ButtonCategories category="NowPlaying" />
            <NowPlayingTitle>Now Playing Movies</NowPlayingTitle>
            <CardList object={this.state.info} />
            <LoadMoreButton onClick={this.nextPage}>Load More</LoadMoreButton>
          </NowPlayingContainer>
        ) : (
          <FallBackPage />
        )}
      </Fragment>
    );
  }
}

export default NowPlaying;
