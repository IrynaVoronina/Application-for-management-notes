package com.example.backend.service;

import com.example.backend.model.entity.Note;
import com.example.backend.model.enums.Status;
import com.example.backend.repository.NoteRepository;
import com.example.backend.validation.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;

    private Note getOrElseThrow(String id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Note with id %s does not exist", id)));
    }

    @Override
    public List<Note> getAll() {
        return noteRepository.findAll();
    }

    @Override
    public Note getById(String id) {
        return getOrElseThrow(id);
    }

    @Override
    public Note create(Note note) {
        note.setStatus(Status.ACTIVE);
        return noteRepository.save(note);
    }

    @Override
    public Note update(Note note) {
        Note existingNote = getOrElseThrow(note.getId());
        note.setCreationDateTime(existingNote.getCreationDateTime());
        return noteRepository.save(note);
    }

    @Override
    public void delete(String id) {
        Note note = getOrElseThrow(id);
        noteRepository.delete(note);
    }
}
