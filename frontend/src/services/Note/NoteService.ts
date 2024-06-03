import axios from 'axios'
import NoteResponseDto from "../../dto/Note/NoteResponseDto";
import NoteUpdateDto from "../../dto/Note/NoteUpdateDto";
import NoteCreateDto from "../../dto/Note/NoteCreateDto";


const apiUrl = "http://localhost:8080/notes";

export const getAllNotes = async (): Promise<NoteResponseDto[]> => {
    const response = await axios.get<NoteResponseDto[]>(apiUrl);
    return response.data;
};

export const getNoteById = async (id: string): Promise<NoteResponseDto> => {
    const response = await axios.get<NoteResponseDto>(`${apiUrl}/${id}`);
    return response.data;

};
export const createNote = async (note: NoteCreateDto): Promise<NoteResponseDto> => {
    const response = await axios.post<NoteResponseDto>(apiUrl, note);
    return response.data;

};

export const updateNote = async (note: NoteUpdateDto, id: string): Promise<NoteResponseDto> => {
    const response = await axios.put<NoteResponseDto>(`${apiUrl}/${id}`, note);
    return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
    await axios.delete(`${apiUrl}/${id}`);
};