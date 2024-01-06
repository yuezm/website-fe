import { v4 } from "uuid";

import { Note, NoteType } from "../../model/Note";

export function createNewGroup(id: string = v4()) {
  return {
    id,
    type: NoteType.Group,
    path: '',
    title: '新建分组',
    children: [],
  }
}

export function createNewNote() {
  return {
    id: v4(),
    type: NoteType.Note,
    path: '',
    title: '新建文档',
  }
}

export function generateNewKey(p: string, c: string | number) {
  return p ? `${p}.${c}` : typeof c === 'number' ? c.toString() : c;
}

export function findNoteByKeys(rootNote: Note, key: string) {
  if (!key) {
    return rootNote;
  }

  const keys = key.split('.');
  let node = rootNote;
  let i = 0;

  while (i < keys.length) {
    if (!node.children) {
      return rootNote;
    }
    node = node.children[Number(keys[i])];
    i++;
  }

  return node;
}