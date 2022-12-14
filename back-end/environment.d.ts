declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // APP
      APP_PROTOCOL: string;
      APP_HOST: string;
      APP_PORT: number;

      //Data Base
      DB_DIALECT: string | 'mysql';
      DB_PORT: number;
      DB_HOST: string;
      DB_USER: string;
      DB_PASS: string;
    }
  }
}

export {};
