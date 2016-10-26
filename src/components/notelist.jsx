import React from 'react';
import Note from './note.jsx';
import { withRouter, Link } from 'react-router';
import firebase from '../../firebase.config.js';
import request from 'superagent';

class NoteList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: {},
      content: [],
      titles: [],
      ids: [],
    }
  }
  componentDidMount() {
    this.getNotes();
    this.createIds();
  }

  getNotes() {
    let notesDatabase = firebase.database().ref().child("users").child("notes").child(this.props.params.notelist);
    let updatedNotes = [];
    let noteIds = [];
    notesDatabase.on("value", (snapshot) => {
      updatedNotes.push(snapshot.val());
      for (let id in snapshot.val()) {
        noteIds.push(id);
      }
      console.log(`this is noteIds: ${noteIds}`)
      this.setState({
        notes: updatedNotes,
        ids: noteIds,
      })

      this.cleanData();
    }, (errorObject) => {
      updatedNotes.push("the read failed: " + errorObject.code);
    });
  }

  cleanData() {
    let noteListTitles = Object.keys(this.state.notes[0]).map( (key) => {
      let individualTitle = this.state.notes[0][key].title;
      return individualTitle;
    })
    let noteListContents = Object.keys(this.state.notes[0]).map( (key) => {
      let individualContent = this.state.notes[0][key].content;
      return individualContent;
    })

    this.setState({
      titles: noteListTitles,
      content: noteListContents,
    })
  }

  render() {
    return (
      <div>
        {
          this.state.titles.map((title, idx) => {
            const linkURL = this.state.ids[idx]
            return (
              <div>
                <Link key={idx} to={`/${linkURL}`}>{title}</Link>
              </div>

              )
          })
        }
      </div>
     )
  }
}



export default withRouter(NoteList);
