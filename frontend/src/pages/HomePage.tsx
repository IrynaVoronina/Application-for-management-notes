import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllNotes} from "../services/Note/NoteService";
import NoteResponseDto from "../dto/Note/NoteResponseDto";
import '../styles/homePage.scss';

export default function HomePage() {

    const [notes, setNotes] = useState<NoteResponseDto[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const fetchedNotes = await getAllNotes();
            setNotes(fetchedNotes);
        };
        fetchNotes();
    }, []);


    return (

        <div className='d-flex justify-content-around flex-column align-items-center vh-100'>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex flex-wrap">
                    {notes.map((note, index) => (
                        <Link to={`/${note.id}`} className="page-link">
                            <div
                                className={`note priority-${note.priority.toLowerCase()} ${note.status === 'COMPLETED' ? 'status-completed' : ''}`}
                                key={index}>
                                <div className="title">{note.title}</div>
                                <div className="last-edited">{new Date(note.lastEditedDateTime).toLocaleString()}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Link className="floating-button text-decoration-none" to="/create"> + </Link>
        </div>
    );
}
