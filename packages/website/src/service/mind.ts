import axios from 'axios';

import { MindItem, ResponseWrapper } from '../model';
import { request } from '../utils/service';

export async function getMinds() {
  return request.get<ResponseWrapper<MindItem[]>>('/api/mind').then((res) => res.data.data);
}

export async function getMindUrl(key: string) {
  return request.get<ResponseWrapper<string>>(`/api/mind/${key}`).then((res) => res.data.data);
}

export async function getMindFile(url: string) {
  return axios.get(url, { responseType: 'blob' }).then((res) => res.data);
}

export async function uploadMind(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  return request.post(`/api/mind`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
