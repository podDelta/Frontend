import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 570,
    backgroundColor: '#5AE0B9',
    textAlign: 'center',
  },
  headerTitle: {
    paddingTop: 60,
    margin: 0,
    fontWeight: 300,
  },
  headerList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    fontWeight: 200,
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  headerListItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
    backgroundColor: '#424752',
    textAlign: 'center',
    color: '#fff',
    border: '3px solid #5AE0B9',
  }
});

function Home (props) {
  return (
    <div className={css(styles.home)}>
      <div className={css(styles.header)}>
        <h1 className={css(styles.headerTitle)}>(POD)DELTA</h1>
        <h3>TAGLINE</h3>
        <ul className={css(styles.headerList)}>
          <li className={css(styles.headerListItem)}>
            <h2>(PAST)</h2>
            <h2>SHOW</h2>
          </li>
          <li className={css(styles.headerListItem)}>
            <h2>(LATEST)</h2>
            <h2>SHOW</h2>
          </li>
          <li className={css(styles.headerListItem)}>
            <h2>(UPCOMING)</h2>
            <h2>SHOW</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
