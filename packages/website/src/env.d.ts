/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REQUEST_RUL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
