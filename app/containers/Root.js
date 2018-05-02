// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { amber600, amber800, amberA400, grey100, grey400, grey500, white, darkBlack } from 'material-ui/styles/colors';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber600,
    primary2Color: amber800,
    primary3Color: grey400,
    accent1Color: amberA400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white
  }
});
injectTapEventPlugin();

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Routes />
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
