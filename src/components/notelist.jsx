import React from 'react';
import Note from './note.jsx';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class NoteList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: {},
      titles: [],
    }
  }
  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    let notesDatabase = firebase.database().ref().child("notes");
    let updatedNotes = [];
    notesDatabase.on("value", (snapshot) => {
      updatedNotes.push(snapshot.val());
      this.setState({
        notes: updatedNotes
      })
      this.cleanData();
    }, (errorObject) => {
      updatedNotes.push("the read failed: " + errorObject.code);
    });
  }

  cleanData() {
    let noteListTitles = Object.keys(this.state.notes[0]).map( (key) => {
      let individualTitle = this.state.notes[0][key].title;
      console.log(individualTitle);
      return individualTitle;
    })
    this.setState({
      titles: noteListTitles,
    })
  }



  render() {
    return (
      <div>
        {
          this.state.titles.map((title) => {
            return (
              <li>{title}</li>
            )
          })
        }
      </div>
     )
  }
}



export default NoteList;
