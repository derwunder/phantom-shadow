// @flow
import React, { Component } from 'react';
import LogoBox from '../components/signin/LogoBox';
import SigninPanel from '../components/signin/SigninPanel';
// import Home from '../components/Home';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <LogoBox />
        <SigninPanel />
      </div>
    );
  }
}
