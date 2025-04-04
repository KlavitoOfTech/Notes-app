import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";
import Split from "react-split";
import Header from "./components/Header"; // ✅ Import Header

export default function App() {
    // Load initial notes from localStorage
    const [notes, setNotes] = React.useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    });
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );
    
    React.useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem("notes", JSON.stringify(notes));
        } else {
            localStorage.removeItem("notes"); // Remove from storage when empty
        }
    }, [notes]);
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes(oldNotes => oldNotes         
            .map(oldNote => {
                return oldNote.id === currentNoteId
                    ? { ...oldNote, body: text }
                    : oldNote;
                })
            .sort((a, b) => (a.id === currentNoteId ? -1 : b.id === currentNoteId ? 1 : 0))
        );
    }

    function deleteNote(noteId) {
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    
        // If the deleted note is the current note, update `currentNoteId`
        setCurrentNoteId(prevId => 
            prevId === noteId ? (notes.length > 1 ? notes[0].id : "") : prevId
        );
    }

    function findCurrentNote() {
        return notes.find(note => note.id === currentNoteId) || notes[0];
    }
    console.log("Notes:", notes);

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
                            deleteNote = {deleteNote} // ✅ Pass delete function
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
