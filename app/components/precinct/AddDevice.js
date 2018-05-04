// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Barcode from 'react-barcode';
import { FloatingActionButton, Dialog, FlatButton, TextField, Toggle } from 'material-ui';

class AddDevice extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open2: false,
      boxName: '',
      clientName: '',
      novaOrder: '',
      favorite: false,
      gBoard: false,
      dropimg: null,
      preview: null
    };
  }
  restoreState = () => {
    this.setState({ boxName: '' });
    this.setState({ clientName: '' });
    this.setState({ novaOrder: '' });
    this.setState({ favorite: false });
    this.setState({ fBoard: false });
    this.setState({ gBoard: false });
  };
  handleOpen = () => {
    this.restoreState();
    this.setState({ open: !this.state.open });
  };
  handleChangeFav = () => {
    this.setState({ favorite: !this.state.favorite });
  };
  handleChangeGB = () => {
    this.setState({ gBoard: !this.state.gBoard });
  };
  handleSave = () => {
    this.restoreState();
    console.log('Button Save');
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleOpen}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleSave}
      />,
    ];
    return (
      <div style={{ height: 75 }}>
        <FloatingActionButton
          onTouchTap={this.handleOpen}
          style={{
             position: 'fixed',
             bottom: 10,
             right: 10,
             zIndex: 2
           }}
        >
          <i className="material-icons md-24 md-light " aria-hidden="true">add</i>
        </FloatingActionButton>
        <Dialog
          contentStyle={{ width: '95%', transform: 'translate(0px, 5px)', minHeight: 140 }}
          bodyStyle={{ minHeight: 140 }}
          style={{ minHeight: 140, paddingTop: 0 }}
          repositionOnUpdate
          autoDetectWindowHeight={false}
          title="New Device"
          actions={actions}
          modal
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleOpen}
        >
          <div style={{ display: 'block' }}>
            <TextField
              style={{ margin: 5 }}
              hintText="Name"
              floatingLabelText="Client"
              id="client_name"
              value={this.state.clientName}
              onChange={(e) => { this.setState({ clientName: e.target.value }); }}
            />
          </div>
          <div style={{ display: 'block' }}>
            <TextField
              style={{ margin: 5, display: 'inline-block', verticalAlign: 'top' }}
              hintText="Order"
              floatingLabelText="Nova Order"
              id="nova_order"
              value={this.state.novaOrder}
              onChange={(e) => {
                if ((e.target.value).length === 5) {
                  this.setState({ novaOrder: `${e.target.value}-` });
                } else {
                    this.setState({ novaOrder: e.target.value });
                }
              }}
            />
            <Barcode style={{ display: 'inline-block', maxHeight: 120 }} value={this.state.novaOrder} />
          </div>
          <Toggle
            style={{ maxWidth: 300, marginTop: 15 }}
            onToggle={this.handleChangeFav}
            label={
              <span >
                <i
                  style={{ marginRight: 5, marginLeft: 5 }}
                  className={this.state.favorite ? 'material-icons md-20 md-dark md-active' : 'material-icons md-20 md-dark'}
                  aria-hidden="true"
                >
                  favorite
                </i>Favorite
              </span>}
            labelPosition="left"
          />
          <Toggle
            style={{ maxWidth: 300, marginTop: 15 }}
            onToggle={this.handleChangeGB}
            label={
              <span >
                <i
                  style={{ marginRight: 5, marginLeft: 5 }}
                  className={this.state.gBoard ? 'material-icons md-20 md-dark md-active' : 'material-icons md-20 md-dark'}
                  aria-hidden="true"
                >language
                </i>Global Board
              </span>}
            labelPosition="left"
          />
        </Dialog>
      </div>
    );
  }
}

export default connect((state) => state)(AddDevice);
