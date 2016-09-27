import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import firebase from '../../firebase.config.js';


class EditNote extends Component{
  constructor() {
    super();
    this.state = {
      localContent: '',
      localTitle: '',
    }
    this.submit = this.submit.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateContent(e) {
    const newContent = e.target.value;
    this.setState( {
      localContent: newContent,
    });
  }

  updateTitle(e) {
    const newTitle = e.target.value;
    this.setState( {
      localTitle: newTitle,
    });
  }

  submit(e) {
    e.preventDefault();
    let database = firebase.database().ref();
    let noteRef = database.child("notes").child(this.props.params.editnote);
    noteRef.set({
      title: this.state.localTitle,
      content: this.state.localContent,
    })
    this.props.router.push('/notelist');
  }

  render() {
    console.log(this.props.params.editnote);
    return (
      <div>
        <form id='new-note' onSubmit={this.submit}>
          <input
            type="text"
            name="title"
            value={this.state.localTitle}
            onChange={this.updateTitle}
          />
          <input
            type="text"
            name="content"
            value={this.state.localContent}
            onChange={this.updateContent}
          />
          <input
            type="submit"
            value="SAVE"
            className="hidden"
          />
        </form>
      </div>
      )
  }
}

export default withRouter(EditNote);
