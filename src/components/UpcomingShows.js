import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  upcomingShows: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function UpcomingShows (props) {
  return (
    <div className={css(styles.upcomingShows)}>
      UPCOMING SHOWS
    </div>
  );
}

export default UpcomingShows;
