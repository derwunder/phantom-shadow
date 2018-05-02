// @flow
import React, { Component } from 'react';
import Settings from '../../images/settings.svg';
// import Logo from '../../images/tcb_logo_black.png';
import styles from './app.signin.css';

type Props = {};

export default class LogoBox extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.signinlogobox}>
        <div className={styles.signinlogocontent}>
          <div className={styles.signinlogoborder}>
            <img src={Settings} className="App-logo" alt="logo" style={{ maxWidth: '140px' }} />
          </div>
          <div className={styles.signinlogoinfo}>
            <h2>Titulo</h2>
            <p className="App-intro">Intro</p>
          </div>
        </div>
      </div>
    );
  }
}
