// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { TextField, Toggle, Dialog } from 'material-ui';
import { indigo600 } from 'material-ui/styles/colors';
import { startLoginEmail, createAccount, forgotUserPass, startLoginGoogleDirect } from '../../actions/singin';


import styles from './app.signin.css';

/* type Props = {
  startLoginEmail: (email, password) => void,
  createAccount: (email, password) => void,
  forgotUserPass: (email, password) => void,
  startLoginGoogleDirect: () => void
}; */

class SigninPanel extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      newAccount: false,
      txEmail: '',
      txPass: '',
      dialogRePass: false,
      emailRePass: ''
    };
  }
  handleSignIn = () => {
    this.setState({ newAccount: !this.state.newAccount });
  };
  handleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  handleExpandChange = (expanded) => {
    this.setState({ expanded });
  };
  render() {
    const {
      dispatch
    } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={() => {
          this.setState({ dialogRePass: false });
         this.setState({ emailRePass: '' });
        }}
      />,
      <FlatButton
        label="Send"
        primary
        keyboardFocused
        onTouchTap={() => {
          forgotUserPass(this.state.emailRePass);
          this.setState({ dialogRePass: false });
          this.setState({ emailRePass: '' });
        }}
      />,
    ];
    return (
      <div className={styles.signinpanelbox}>
        <div className={styles.signinpanel}>
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
            style={{ margin: 10, maxWidth: 280, minWidth: 180 }}
          >
            <CardTitle title="Sign In" subtitle="Let's get started" />
            <CardText style={{ textAlign: 'center' }}>
              <i
                onClick={() => dispatch(startLoginGoogleDirect())}
                style={{ margin: '5px', cursor: 'pointer' }}
                className="fa fa-google material-icons md-36 md-dark"
                aria-hidden="true"
              />
              <i
                onClick={this.handleExpanded}
                style={{ margin: '5px', cursor: 'pointer', color: this.state.expanded ? indigo600 : '' }}
                className="fa fa-envelope material-icons md-36 md-dark"
                aria-hidden="true"
              />
            </CardText>
            <CardText
              expandable
            >
              <Toggle
                label="New Account"
                labelPosition="right"
                labelStyle={{ color: 'rgba(0, 0, 0, 0.541176)' }}
                toggled={this.state.newAccount}
                onToggle={this.handleSignIn}
              />
              <TextField
                style={{ margin: 5, maxWidth: 200 }}
                hintText="eMail"
                floatingLabelText="eMail"
                id="su_email"
                onChange={(e) => this.setState({ txEmail: e.target.value })}
              />
              <TextField
                style={{ margin: 5, maxWidth: 200 }}
                hintText="Password"
                floatingLabelText="Password"
                id="su_password"
                type="password"
                onChange={(e) => this.setState({ txPass: e.target.value })}
              />
            </CardText>
            <CardActions
              expandable
            >
              <FlatButton
                label="Create Account"
                style={{ display: (this.state.newAccount ? 'inline-block' : 'none') }}
                onTouchTap={
                  () => {
                dispatch(createAccount(this.state.txEmail, this.state.txPass));
                }}
              />
              <FlatButton
                label="LogIn"
                style={{ display: (!this.state.newAccount ? 'inline-block' : 'none') }}
                onTouchTap={
                  () => {
                dispatch(startLoginEmail(this.state.txEmail, this.state.txPass));
                }}
              />
              <FlatButton
                onTouchTap={() => this.setState({ dialogRePass: true })}
                label="Forgot"
                style={{ display: (!this.state.newAccount ? 'inline-block' : 'none') }}
              />
            </CardActions>
          </Card>
          <Dialog
            bodyStyle={{ minHeight: 140 }}
            contentStyle={{
              maxWidth: 350, width: '95%', transform: 'translate(0px, 5px)', minHeight: 140
            }}
            style={{ minHeight: 140, paddingTop: 0 }}
            repositionOnUpdate
            autoDetectWindowHeight={false}
            title="Restore Password By Email"
            actions={actions}
            modal={false}
            open={this.state.dialogRePass}
          >
            <TextField
              style={{ margin: 5, width: '80%' }}
              hintText="Email"
              floatingLabelText="Send to this Email"
              type="email"
              value={this.state.emailRePass}
              onChange={(e) => this.setState({ emailRePass: e.target.value })}
            />
          </Dialog>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(SigninPanel);
