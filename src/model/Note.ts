export enum NoteType {
  None = 0,
  Group,
  Note,
}

export interface Note {
  id: string;
  type: NoteType,
  path: string;
  title: string;
  children?: Note[];
}

export interface RootNote extends Note {
  children: Note[];
}