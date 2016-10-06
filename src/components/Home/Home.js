import React from 'react';
import Link from 'react-router/Link';
import { css, StyleSheet } from 'aphrodite';
// import BrandingIcons from './BrandingIcons';

const styles = StyleSheet.create({
  home: {
    // overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 570,
    backgroundColor: '#5AE0B9',
    textAlign: 'center',
  },
  headerTitle: {
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    marginTop: 284/2,
    fontSize: 64,
    fontWeight: 300,
  },
  headerSubtitle: {
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    marginTop: 40,
    fontSize: 42,
    fontWeight: 200,
  },
  listContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerList: {
    backgroundColor: '#424752',
    height: 200,
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
    textDecoration: 'none',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: -120,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#424752',
    color: '#fff',
  },
  headerListItemSkew: {
    width: '100%',
    marginLeft: -120,
    border: '8px solid #5AE0B9',
    borderBottom: 'none',
    borderTop: 'none',
    transformOrigin: 'bottom left',
    transform: 'skew(-20deg, 0deg)'
  },
  headerListItemText: {
    textAlign:'center',
    fontWeight: 100,
    bold: 'none',
    margin: 5,
    padding: 0,
  },
  leadListItem: {
    marginLeft: -110,
  },
  headerListItemTextSkew: {
    paddingRight: 0,
    transform: 'skew(20deg, 0deg)'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
});

function Home (props) {
  return (
    <div className={css(styles.home)}>
      <div className={css(styles.header)}>
        <h1 className={css(styles.headerTitle)}>(POD)DELTA</h1>
        <h3 className={css(styles.headerSubtitle)}>TAGLINE</h3>
        <div className={css(styles.listContainer)}>
          <ul className={css(styles.headerList)}>
            <Link to="/" className={css(styles.headerListItem)}>
              <li>
                <h2 className={css(styles.headerListItemText, styles.leadListItem)}>(PAST)</h2>
                <h2 className={css(styles.headerListItemText, styles.leadListItem)}>SHOW</h2>
              </li>
            </Link>
            <Link className={css(styles.headerListItem, styles.headerListItemSkew)} to="/latestshows">
              <li>
                <h2 className={css(styles.headerListItemText, styles.headerListItemTextSkew)}>(LATEST)</h2>
                <h2 className={css(styles.headerListItemText, styles.headerListItemTextSkew)}>SHOW</h2>
              </li>
            </Link>
            <Link className={css(styles.headerListItem)} to="/upcomingshows">
              <li>
                <h2 className={css(styles.headerListItemText)}>(UPCOMING)</h2>
                <h2 className={css(styles.headerListItemText)}>SHOW</h2>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
