import React from "react";

export default function Sidebar(props) {
    function getNoteSummary(body) {
        return body.split("\n")[0]; // Extract the first line as summary
    }

    const noteElements = props.notes.map((note) => (
        <div key={note.id} className="note-item">
            <div
                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{getNoteSummary(note.body)}</h4>
            </div>
            <button 
                className="delete-btn" 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent selecting note when deleting
                    props.deleteNote(note.id);
                }}
            >
                🗑️
            </button>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3 className="notes-header">Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    );
}
