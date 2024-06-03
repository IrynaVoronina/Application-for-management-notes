export default interface NoteResponseDto {
    id: string;
    title: string;
    content: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    status: "ACTIVE" | "COMPLETED";
    isPinned: boolean;
    creationDateTime: string;
    lastEditedDateTime: string;
}

