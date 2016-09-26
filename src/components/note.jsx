import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';
import firebase from '../../firebase.config.js';
// const propTypes = {
//   content: React.PropTypes.string,
//   title: React.PropTypes.string,
//   id: React.PropTypes.string,
// };


class Note extends Component {
  constructor() {
    super();
    this.state = {
      localTitle: '',
      localContent: '',
      localId: '',
    }
    this.submit = this.submit.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  submit(e) {
    e.preventDefault();
    document.getElementById('new-note').reset();
    console.log('you pressed the submit button!');
    let database = firebase.database().ref();
    let notesRef = database.child("notes");
    let newNoteRef = notesRef.push();
    newNoteRef.set({
      title: this.state.localTitle,
      content: this.state.localContent
    })
    this.props.router.push('/notelist')
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


  render() {
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


export default withRouter(Note);
