declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PROTOCOL: string | undefined;
      APP_HOST: string | undefined;
      APP_PORT: string | undefined;
    }
  }
}

export {};
