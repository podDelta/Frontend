import React from 'react';
import Match from 'react-router/Match'
import { css, StyleSheet } from 'aphrodite';
import Home from './../components/Home/Home.js';
import LatestShows from './../components/LatestShows.js';
import PastShows from './../components/PastShows.js';
import UpcomingShows from './../components/UpcomingShows.js';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

class HomeContainer extends React.Component {
  render () {
    return (
      <div className={css(styles.container)}>
        <Home pathname={this.props.pathname}/>
        <Match exactly pattern={this.props.pathname} render={() => <PastShows />}/>
        <Match exactly pattern={`/latestshows`} pathname={this.props.pathname} component={LatestShows}/>
        <Match exactly pattern={`/upcomingshows`} pathname={this.props.pathname} component={UpcomingShows}/>
      </div>
    );
  }
}

export default HomeContainer;
