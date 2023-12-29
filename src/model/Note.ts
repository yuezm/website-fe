export interface Note {
  id: string | number;
  path: string;
  title: string;
  children?: Note[];
}