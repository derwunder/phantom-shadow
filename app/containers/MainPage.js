// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { logoutFB } from '../actions/singin';
import styles from '../css/mainpage.css';
import Precinct from '../components/precinct/Precinct';

// type Props = {};

class MainPage extends Component<Props> {
  props: Props;
  handleKeyPress = () => {
  }
  render() {
    const {
      dispatch
    } = this.props;
    return (
      <div>
        <div className={styles.mainmenubox}>
          <div className={styles.mainmenu}>
            <div className={styles.mainmenuborder}>
              <Link style={{ opacity: '0.8', display: 'block', marginTop: 25 }} to="/main/home">
                <i
                  style={{ cursor: 'pointer', color: '#fff' }}
                  className=" fa fa-home material-icons md-26 md-light"
                  aria-hidden="true"
                />
              </Link>
              <Link style={{ textDecoration: 'none', display: 'block', marginTop: 25 }} to="/main/home">
                <i
                  style={{ cursor: 'pointer', color: '#fff' }}
                  className=" fa fa-university material-icons md-26 md-light"
                  aria-hidden="true"
                />
              </Link>
              <Link style={{ textDecoration: 'none', display: 'block', marginTop: 25 }} to="/main/home">
                <i
                  style={{ cursor: 'pointer', color: '#fff' }}
                  className=" fa fa-users material-icons md-26 md-light"
                  aria-hidden="true"
                />
              </Link>
              <Link style={{ textDecoration: 'none', display: 'block', marginTop: 25 }} to="/main/home">
                <i
                  style={{ cursor: 'pointer', color: '#fff' }}
                  className=" fa fa-newspaper-o material-icons md-26 md-light"
                  aria-hidden="true"
                />
              </Link>
              <Link style={{ textDecoration: 'none', display: 'block', marginTop: 25 }} to="/main/home">
                <i
                  style={{ cursor: 'pointer', color: '#fff' }}
                  className=" fa fa-search material-icons md-26 md-light"
                  onClick={() => dispatch(logoutFB())}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Apptest}>
          <Switch>
            <Route exact path="/main/home" component={Precinct} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(MainPage);
