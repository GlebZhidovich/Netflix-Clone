import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "../../../assets/scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import movieActions from "../../actions/movieActions";

import Nav from "../presentations/Nav";
import Footer from "../presentations/Footer";

import HomePage from "../presentations/HomePage";
import AuthPage from "../presentations/AuthPage";
import SearchPage from "../presentations/SearchPage";
import MoviePage from "../presentations/MoviePage";
import NotFoundPage from "../presentations/NotFoundPage";

class Routes extends React.Component {
  render() {
    const theHomePage = props => (
      <HomePage
        movieActions={this.props.movieActions}
        upcoming={this.props.upcoming}
        popular={this.props.popular}
        topRated={this.props.topRated}
        nowPlaying={this.props.nowPlaying}
        {...props}
      />
    );
    const theSearchPage = props => (
      <SearchPage
        movieActions={this.props.movieActions}
        search={this.props.search}
        {...props}
      />
    );
    const theMoviePage = props => (
      <MoviePage
        movieActions={this.props.movieActions}
        theMovie={this.props.theMovie}
        castList={this.props.castList}
        {...props}
      />
    );
    const AuthPage = props => <AuthPage />;
    return (
      <Router>
        <div>
          <Nav movieActions={this.props.movieActions} />
          <Switch>
            <Route exact path="/" render={theHomePage} />
            <Route exact path="/search" render={theSearchPage} />
            <Route exact path="/movie" render={theMoviePage} />
            <Route exact path="/auth" render={AuthPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
