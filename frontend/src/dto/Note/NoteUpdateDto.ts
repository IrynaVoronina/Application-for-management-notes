export default interface NoteUpdateDto {

    title: string;
    content: string;
    priority: "HIGH" | "MEDIUM" | "LOW";
    status: "ACTIVE" | "COMPLETED";
    isPinned: boolean;

}