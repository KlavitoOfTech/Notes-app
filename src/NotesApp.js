import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";
import Split from "react-split";
import Header from "./components/Header"; // ✅ Import Header

export default function App() {
    const [notes, setNotes] = React.useState([]);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote;
        }));
    }

    function findCurrentNote() {
        return notes.find(note => note.id === currentNoteId) || notes[0];
    }

    return (
        <div className="app-container">
            <Header /> {/* ✅ Add Header at the top */}

            <main>
                {notes.length > 0 ? (
                    <Split sizes={[30, 70]} direction="horizontal" className="split">
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                        />
                        {currentNoteId && notes.length > 0 && (
                            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
                        )}
                    </Split>
                ) : (
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button className="first-note" onClick={createNewNote}>
                            Create one now
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
