package com.example.backend.service;

import com.example.backend.model.entity.Note;

import java.util.List;

public interface NoteService {

    List<Note> getAll();

    Note getById(String id);

    Note create(Note note);

    Note update(Note note);

    void delete(String id);
}
