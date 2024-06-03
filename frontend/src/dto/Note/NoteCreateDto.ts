export default interface NoteCreateDto {
    title: string;
    content: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    isPinned: boolean;
}