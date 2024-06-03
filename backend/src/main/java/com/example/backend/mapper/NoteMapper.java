package com.example.backend.mapper;

import com.example.backend.dto.NoteCreateDto;
import com.example.backend.dto.NoteResponseDto;
import com.example.backend.dto.NoteUpdateDto;
import com.example.backend.model.entity.Note;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface NoteMapper {

    @Mapping(target = "creationDateTime", expression = "java(java.time.LocalDateTime.now())")
    @Mapping(target = "lastEditedDateTime", expression = "java(java.time.LocalDateTime.now())")
    Note mapCreateDtoToEntity(NoteCreateDto createDto);

    @Mapping(target = "lastEditedDateTime", expression = "java(java.time.LocalDateTime.now())")
    Note mapUpdateDtoToEntity(NoteUpdateDto updateDto);

    NoteResponseDto mapEntityToDto(Note note);

    List<NoteResponseDto> mapToDtoList(List<Note> notes);
}