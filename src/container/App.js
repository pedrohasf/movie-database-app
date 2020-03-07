import React, { Fragment } from 'react';
import './App.css';
import HomePage from '../pages/HomePage/HomePage.component'
import Header from '../components/Header/Header.component'
import Movie from '../pages/MoviePage/Movie.component.jsx'
import Upcoming from '../pages/Upcoming/Upcoming.component.jsx'
import SearchPage from '../pages/SearchPage/SearchPage.component.jsx'
import TopRated from '../pages/TopRated/TopRated.component'
import NowPlaying from '../pages/NowPlaying/NowPlaying.component'
import SignInAndSignUpPage from '../pages/SignInAndSignUpPage/SignInAndSignUpPage.component'
import { Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else{
        this.setState({currentUser: userAuth})
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <Fragment>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:movieId" component={Movie} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/top_rated" component={TopRated} />
      <Route path="/now_playing" component={NowPlaying} />
      <Route path="/popular" component={HomePage} />
      <Route path="/search/:searchValue" component={SearchPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    </Fragment>
  );
}
}

export default App;
