import { axios } from './request';
import { Response, NoteList } from './model';

export const API_PREFIX = '/api';

export enum RequestURL {
  NoteList = '/note',
  NoteListOfLatest = '/note/latest',
  NoteListDetail = '/note', // /note/:id
}

export const getNoteList = () =>
  axios.get<Response<NoteList[]>>(API_PREFIX + RequestURL.NoteList);

export const getNoteListLatest = () =>
  axios.get<Response<NoteList[]>>(API_PREFIX + RequestURL.NoteListOfLatest);

export const getNoteDetail = (id: string) =>
  axios.get<Response<NoteList>>(
    API_PREFIX + RequestURL.NoteListDetail + `/${id}`
  );
