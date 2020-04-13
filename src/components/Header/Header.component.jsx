import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderNav,
  HeaderLogoLink,
  HeaderLogoIcon,
  LogOutContainer,
  LogInLink,
  HeaderSpan,
  SearchBoxStyled,
} from "./Header.styles.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  onSubmit = () => {
    this.props.history.push(`/search/${this.state.searchField}`);
  };
  render() {
    const { currentUser } = this.props;
    return (
      <HeaderNav>
        <HeaderLogoLink to={"/"}>
          <HeaderLogoIcon className="fas fa-video text-4xl"></HeaderLogoIcon>{" "}
          <HeaderSpan>Movie App</HeaderSpan>
        </HeaderLogoLink>
        <SearchBoxStyled
          searchChange={this.onSearchChange}
          onSubmit={
            this.state.searchField.length > 0 ? this.onSubmit : () => {}
          }
        />
        {currentUser ? (
          <LogOutContainer onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </LogOutContainer>
        ) : (
          <LogInLink to="/signin"> SIGN IN </LogInLink>
        )}
      </HeaderNav>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header));
