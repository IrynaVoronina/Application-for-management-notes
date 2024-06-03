package com.example.backend.dto;


import com.example.backend.model.enums.Priority;
import com.example.backend.model.enums.Status;
import com.example.backend.validation.annotation.EnumConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class NoteUpdateDto {

    @NotBlank(message = "Title must be specified")
    @Size(max = 70, message = "Title should not exceed 70 characters")
    String title;

    @NotBlank(message = "Content is mandatory")
    String content;

    @NotNull(message = "Priority is mandatory")
    @EnumConstraint(enumClass = Priority.class)
    String priority;

    @NotNull(message = "Status is mandatory")
    @EnumConstraint(enumClass = Status.class)
    String status;

    @NotNull
    Boolean isPinned;

}
