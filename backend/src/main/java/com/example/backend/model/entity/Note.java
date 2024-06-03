package com.example.backend.model.entity;

import com.example.backend.model.enums.Priority;
import com.example.backend.model.enums.Status;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Document(collection = "notes")
public class Note {

    @Id
    String id;

    String title;
    String content;
    LocalDateTime creationDateTime;
    LocalDateTime lastEditedDateTime;
    Priority priority;
    Status status;
    Boolean isPinned;

}
