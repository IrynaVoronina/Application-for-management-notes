import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import NoteUpdateDto from "../../dto/Note/NoteUpdateDto";
import {getNoteById, updateNote} from "../../services/Note/NoteService";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {schema} from "../../validation/InputValidator";
import {useErrorBoundary} from "react-error-boundary";

export default function UpdateNote() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    let navigate = useNavigate();

    const params = useParams<{ id: string }>();
    const id = String(params.id);


    const {showBoundary} = useErrorBoundary();

    const [note, setNote] = useState<NoteUpdateDto>({
        title: "",
        content: "",
        priority: "MEDIUM",
        status: "ACTIVE",
        isPinned: false,
    });

    const {title, content, priority, status, isPinned} = note;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote({...note, [e.target.name]: e.target.value});
    };

    const onSubmit = async () => {
        try {
            await updateNote(note, id)
        } catch (error) {
            showBoundary(error);
        }
        navigate("/");
    };

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

    const togglePinned = () => {
        setNote(note => ({
            ...note,
            isPinned: !note.isPinned,
        }));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex justify-content-center">
                        <button
                            type={"button"}
                            className={`btn btn-lg ${isPinned ? 'btn-secondary' : 'btn-outline-secondary'}`}
                            onClick={togglePinned}>
                            {isPinned ? 'Unpin' : 'Pin'}
                        </button>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="title" className="form-label fs-4 text-muted ">
                            --- Title
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter title"
                            {...register('title')}
                            value={title}
                            onChange={(e) => {
                                onInputChange(e);
                            }}
                        />
                        {errors.title && (
                            <p className="text-danger">{errors.title.message}</p>
                        )}
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="content" className="form-label fs-4 text-muted">
                            --- Content
                        </label>
                        <input
                            type={"text"}
                            placeholder={"Enter content"}
                            className="form-control"
                            {...register('content')}
                            value={content}
                            onChange={(e) => {
                                onInputChange(e);
                            }}
                        />
                        {errors.content && (
                            <p className="text-danger">{errors.content.message}</p>
                        )}
                    </div>
                    <div className="mb-3 d-flex justify-content-between m-5">
                        <div>
                            <label className="form-label fs-4 text-muted">Status</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type={"radio"}
                                        className="form-check-input"
                                        name={"status"}
                                        value={"ACTIVE"}
                                        checked={status === 'ACTIVE'}
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">ACTIVE</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type={"radio"}
                                        className="form-check-input"
                                        name={"status"}
                                        value={"COMPLETED"}
                                        checked={status === 'COMPLETED'}
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">COMPLETED</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="form-label fs-4 text-muted">Priority</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type={"radio"}
                                        className="form-check-input"
                                        name={"priority"}
                                        value={"HIGH"}
                                        checked={priority === 'HIGH'}
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">High</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type={"radio"}
                                        className="form-check-input"
                                        name={"priority"}
                                        value={"MEDIUM"}
                                        checked={priority === 'MEDIUM'}
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">Medium</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type={"radio"}
                                        className="form-check-input"
                                        name={"priority"}
                                        value={"LOW"}
                                        checked={priority === 'LOW'}
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">Low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <button type="submit" className="btn btn-success btn-lg "> Submit</button>
                        <Link className="btn btn-outline-danger mx-2 btn-lg" to="/"> Cancel </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}