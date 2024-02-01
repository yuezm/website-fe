export * from './Mind';

export interface ResponseWrapper<T> {
  code: number;
  msg: string;
  data: T;
}
