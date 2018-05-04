import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { auth } from './firebase/Constants';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();
auth.onAuthStateChanged((user) => {
  const auxPhoto = 'https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079';
  // const location = (window.location.href);
  // const indexLoc = location.indexOf('/#/');
  // const routeLoc = location.substring(indexLoc);
  if (user) {
    const provId = 'providerId';
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName !== null ? user.displayName : `${(user.email).substring(0, 9)}...`,
      photoURL: user.photoURL !== null ? user.photoURL : auxPhoto,
      provider: user.providerData[0][provId]
    };
    console.log(user);
    console.log(userData);
    history.replace('/main/home');
    // store.dispatch(loadBoxes());
  } else {
    console.log('Not Login');
  }
});
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
