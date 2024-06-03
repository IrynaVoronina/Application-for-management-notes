import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import NoteResponseDto from "../../dto/Note/NoteResponseDto";
import {deleteNote, getNoteById} from "../../services/Note/NoteService";
import {useErrorBoundary} from "react-error-boundary";

export default function ViewNote() {
    let navigate = useNavigate();

    const params = useParams<{ id: string }>();
    const id = String(params.id);

    const {showBoundary} = useErrorBoundary();

    const [note, setNote] = useState<NoteResponseDto>({
        id: id,
        title: "",
        content: "",
        priority: "MEDIUM",
        status: "ACTIVE",
        isPinned: false,
        creationDateTime: "",
        lastEditedDateTime: "",
    });

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const fetchedNote = await getNoteById(id);
                setNote(fetchedNote);
            } catch (error) {
                showBoundary(error);
            }
        };
        fetchNote();
    }, [id, showBoundary]);

    const handleDeleteNote = async (id: string) => {
        const confirm = window.confirm("Would you like to delete?");
        if (confirm) {
            try {
                await deleteNote(id);
            } catch (error) {
                showBoundary(error);
            }
            navigate("/");
        }
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1 className="card-title text-center my-5">{note.title}</h1>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Content: </b>
                                {note.content}
                            </li>
                            <li className="list-group-item">
                                <b>Priority: </b>
                                <span
                                    className={`badge ${note.priority === 'HIGH' ? 'bg-danger' : note.priority === 'MEDIUM' ? 'bg-warning' : 'bg-success'}`}>
                                        {note.priority}
                                    </span>
                            </li>
                            <li className="list-group-item">
                                <b>Status: </b>
                                <span
                                    className={`badge ${note.status === 'COMPLETED' ? 'bg-secondary' : note.status === 'ACTIVE' ? 'bg-primary' : 'bg-info'}`}>
                                        {note.status}
                                    </span>
                            </li>
                            <li className="list-group-item">
                                <b>Created: </b>
                                {new Date(note.creationDateTime).toLocaleString()}
                            </li>
                            <li className="list-group-item">
                                <b>Last edited: </b>
                                {new Date(note.lastEditedDateTime).toLocaleString()}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <Link className="btn btn-dark mx-2 btn-lg" to={"/"}>Back</Link>
                    <Link className="btn btn-outline-success mx-2 btn-lg" to={`/edit/${note.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2 btn-lg"
                            onClick={() => handleDeleteNote(note.id)}>Delete
                    </button>
                </div>
            </div>
        </div>
    );
}