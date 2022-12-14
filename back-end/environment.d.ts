declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PROTOCOL: 'http' | 'https';
      APP_HOST: string | 'localhost';
      APP_PORT: number;
    }
  }
}

export {};
