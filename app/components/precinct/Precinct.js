// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StackGrid, { transitions } from 'react-stack-grid';
import AddDevice from './AddDevice';

const { scaleDown } = transitions;

class Precinct extends Component<Props> {
  props: Props;
  handleKeyPress = () => {
  }
  render() {
    return (
      <div>
        <h3>Log succes to here bitch</h3>
        <StackGrid
          columnWidth={150}
          monitorImagesLoaded // this props helps monitorin images load - help height size
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {/* PDLoad()}
          {/* wordBoxesLoad()}{/*style={{display:'inline-block',verticalAlign:'top'}} */}
        </StackGrid><AddDevice />
      </div>
    );
  }
}

export default connect((state) => state)(Precinct);
