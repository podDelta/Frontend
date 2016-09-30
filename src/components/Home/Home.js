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
    fontSize: 64,
    fontWeight: 300,
  },
  headerSubtitle: {
    margin: 0,
    fontSize: 42,
    fontWeight: 200,
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
    justifyContent: 'center',
    backgroundColor: '#424752',
    textAlign: 'center',
    color: '#fff',
    border: '3px solid #5AE0B9',
  },
  headerListItemText: {
    fontWeight: 100,
    bold: 'none',
    margin: 5,
    padding: 0,

  }
});

function Home (props) {
  return (
    <div className={css(styles.home)}>
      <div className={css(styles.header)}>
        <h1 className={css(styles.headerTitle)}>(POD)DELTA</h1>
        <h3 className={css(styles.headerSubtitle)}>TAGLINE</h3>
        <ul className={css(styles.headerList)}>
          <li className={css(styles.headerListItem)}>
            <h2 className={css(styles.headerListItemText)}>(PAST)</h2>
            <h2 className={css(styles.headerListItemText)}>SHOW</h2>
          </li>
          <li className={css(styles.headerListItem)}>
            <h2 className={css(styles.headerListItemText)}>(LATEST)</h2>
            <h2 className={css(styles.headerListItemText)}>SHOW</h2>
          </li>
          <li className={css(styles.headerListItem)}>
            <h2 className={css(styles.headerListItemText)}>(UPCOMING)</h2>
            <h2 className={css(styles.headerListItemText)}>SHOW</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
