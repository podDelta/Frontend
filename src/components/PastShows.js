import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  pastShows: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function PastShows (props) {
  return (
    <div className={css(styles.pastShows)}>
      PAST SHOWS
    </div>
  );
}

export default PastShows;
