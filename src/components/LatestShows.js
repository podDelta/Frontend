import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  lastestShows: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '60px 0',
    height: '100%',
    width: '75%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 400,
    marginBottom: 20,
    marginRight: 20,
  },
  title: {
    maxWidth: 400,
  },
  description: {
    maxWidth: 400,
  },
  media: {
    display: 'flex',
    flexGrow: 1.2,
    flexShrink: 1.2,
    flexBasis: '55%',
    justifyContent: 'center',
    width: 600
  },
  frame: {
    width: '100%',
    height: 400,
  },
});

function LatestShows (props) {
  return (
    <div className={css(styles.lastestShows)}>
      <div className={css(styles.content)}>
        <h3 className={css(styles.title)}>Title of Show</h3>
        <p className={css(styles.description)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={css(styles.media)}>
        <iframe className={css(styles.frame)} src="https://www.youtube.com/embed/Vur2dAFZ4GE" frameborder="0" allowfullscreen />
      </div>
    </div>
  );
}

export default LatestShows;
