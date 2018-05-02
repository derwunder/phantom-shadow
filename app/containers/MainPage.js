// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutFB } from '../actions/singin';

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
        <h3>Log succes</h3>
        <div
          tabIndex={0}
          role="button"
          onClick={() => dispatch(logoutFB())}
          onKeyPress={this.handleKeyPress}
        >
          <h4>Logout</h4>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(MainPage);
