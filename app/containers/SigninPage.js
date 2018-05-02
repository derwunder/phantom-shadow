// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoBox from '../components/signin/LogoBox';
import SigninPanel from '../components/signin/SigninPanel';
import * as SigninActions from '../actions/singin';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SigninActions, dispatch);
}

class SigninPage extends Component<Props> {
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

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
