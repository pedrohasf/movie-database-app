import React, { Fragment } from "react";
import ActorList from "../../components/ActorList/ActorList.component";
import CardList from "../../components/CardList/CardList.component.jsx";
import {
  MoviePageContainer,
  MoviePageBackdrop,
  MovieInfoContainer,
  MovieAdditionalInfoContainer,
  MovieActorsContainer,
  MovieSectionTitle,
  MoviePosterImg,
  MovieTextInfoContainer,
  MovieTagline,
  MovieInfoParagraph,
  RatingContainer,
  RatingStarIcon,
  RatingInfo,
  DirectorRatingContainer,
} from "./Movie.styles.jsx";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      director: "",
      actors: [],
      recommendations: [],
    };
  }
  getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=52b17608145274a1143f81584b638e71&language=en-US=`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((state) => {
          return { info: [data][0] };
        });
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=52b17608145274a1143f81584b638e71`
    )
      .then((response) => response.json())
      .then((data) => {
        let directorName;
        data["crew"].map((person) => {
          if (person["job"] === "Director") {
            directorName = person["name"];
          }
          return true;
        });
        this.setState((state) => {
          return { actors: data["cast"], director: directorName };
        });
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/recommendations?api_key=52b17608145274a1143f81584b638e71&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((state) => {
          return { recommendations: data["results"] };
        });
      });
  };
  ReleaseDate = () => {
    let aux = this.state.info["release_date"].split("-");
    const release_date = [];
    aux.map((item) => {
      return release_date.unshift(item);
    });
    return release_date.join("/");
  };
  Budget = () => {
    const numberFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return numberFormat.format(this.state.info["budget"]);
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { info, actors, director } = this.state;
    return (
      <Fragment>
        {info.title ? (
          <Fragment>
            <MoviePageContainer>
              <MoviePageBackdrop
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/w1280/${info["backdrop_path"]}')`,
                }}
              />
              <MovieInfoContainer>
                <MoviePosterImg
                  title={info["title"]}
                  url={info["poster_path"]}
                />
                <MovieTextInfoContainer>
                  <MovieSectionTitle className="mb-1 text-5xl">
                    {info.title}
                  </MovieSectionTitle>
                  <MovieTagline className="mb-6">{info.tagline}</MovieTagline>
                  <MovieInfoParagraph className="mb-16">
                    {info.overview}
                  </MovieInfoParagraph>
                  <MovieInfoParagraph className="mb-6">
                    Genres:{" "}
                    {info.genres
                      ? info.genres
                          .map((genre) => {
                            return genre["name"];
                          })
                          .join(", ")
                      : ""}
                  </MovieInfoParagraph>
                  <DirectorRatingContainer className="mt-auto flex">
                    <MovieInfoParagraph className="text-3xl mb-6">
                      Director: {director ? director : ""}
                    </MovieInfoParagraph>
                    <RatingContainer className="ml-auto">
                      <RatingStarIcon />
                      <RatingInfo>
                        {info["vote_average"]
                          ? info["vote_average"] + "/10"
                          : "Rating not found"}
                      </RatingInfo>
                    </RatingContainer>
                  </DirectorRatingContainer>
                </MovieTextInfoContainer>
              </MovieInfoContainer>
              <MovieAdditionalInfoContainer>
                <MovieInfoParagraph>
                  Release date: {this.ReleaseDate()}
                </MovieInfoParagraph>
                <MovieInfoParagraph>
                  Runtime: {Math.floor(info["runtime"] / 60)}h{" "}
                  {info["runtime"] % 60}min
                </MovieInfoParagraph>
                <MovieInfoParagraph>Budget: {this.Budget()}</MovieInfoParagraph>
              </MovieAdditionalInfoContainer>
              <MovieActorsContainer>
                <MovieSectionTitle className="my-6">Actors</MovieSectionTitle>
                {actors.length > 0 ? (
                  <ActorList object={actors} />
                ) : (
                  "No actors found"
                )}
                <MovieSectionTitle className="my-6">
                  Recommendations
                </MovieSectionTitle>
                {this.state.recommendations.length > 0 ? (
                  <CardList object={this.state.recommendations} />
                ) : (
                  "No recommendations found"
                )}
              </MovieActorsContainer>
            </MoviePageContainer>
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default Movie;
