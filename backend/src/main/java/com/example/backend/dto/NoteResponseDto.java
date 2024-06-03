package com.example.backend.dto;

import com.example.backend.model.enums.Priority;
import com.example.backend.model.enums.Status;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class NoteResponseDto {

    String id;

    String title;

    String content;

    LocalDateTime creationDateTime;

    LocalDateTime lastEditedDateTime;

    Priority priority;

    Status status;

    Boolean isPinned;

}