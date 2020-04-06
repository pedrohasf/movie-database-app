import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "../pages/HomePage/HomePage.component";
import Header from "../components/Header/Header.component";
import Movie from "../pages/MoviePage/Movie.component.jsx";
import Upcoming from "../pages/Upcoming/Upcoming.component.jsx";
import SearchPage from "../pages/SearchPage/SearchPage.component.jsx";
import TopRated from "../pages/TopRated/TopRated.component";
import NowPlaying from "../pages/NowPlaying/NowPlaying.component";
import SignInAndSignUpPage from "../pages/SignInAndSignUpPage/SignInAndSignUpPage.component";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import { setCurrentUser } from "../redux/user/user.action";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/top_rated" component={TopRated} />
          <Route path="/now_playing" component={NowPlaying} />
          <Route path="/popular" component={HomePage} />
          <Route path="/search/:searchValue" component={SearchPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
