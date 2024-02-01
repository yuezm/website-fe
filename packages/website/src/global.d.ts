declare module '*.less' {
  export default string;
}

type NotNull<T> = T extends undefined ? never : T;
