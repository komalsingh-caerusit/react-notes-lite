import axios from "axios";

const API = "http://localhost:5000/notes";

export const fetchNotes = () => axios.get(API);
export const createNote = (data) => axios.post(API, data);
export const updateNoteByID = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteNoteByID = (id) => axios.delete(`${API}/${id}`);
