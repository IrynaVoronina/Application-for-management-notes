package com.example.backend.controller;

import com.example.backend.dto.NoteCreateDto;
import com.example.backend.dto.NoteResponseDto;
import com.example.backend.dto.NoteUpdateDto;
import com.example.backend.mapper.NoteMapper;
import com.example.backend.model.entity.Note;
import com.example.backend.service.NoteService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/notes")
public class NoteController {

    NoteService service;
    NoteMapper mapper;

    @GetMapping()
    public ResponseEntity<List<NoteResponseDto>> getAll() {
        return ResponseEntity.ok().body(mapper.mapToDtoList(service.getAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteResponseDto> getById(@PathVariable String id) {
        return ResponseEntity.ok().body(mapper.mapEntityToDto(service.getById(id)));
    }

    @PostMapping()
    public ResponseEntity<NoteResponseDto> create(@RequestBody @Valid NoteCreateDto createDto) {
        Note noteToCreate = mapper.mapCreateDtoToEntity(createDto);
        Note createdNote = service.create(noteToCreate);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.mapEntityToDto(createdNote));
    }

    @PutMapping("/{id}")
    public ResponseEntity<NoteResponseDto> update(@PathVariable String id,
                                                  @RequestBody @Valid NoteUpdateDto updateDto) {
        Note note = mapper.mapUpdateDtoToEntity(updateDto);
        note.setId(id);
        Note updatedNote = service.update(note);
        return ResponseEntity.ok().body(mapper.mapEntityToDto(updatedNote));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
