declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string

      APP_PROTOCOL: string
      APP_HOST: string
      APP_PORT: string

      DB_DIALECT: string
      DB_PORT: string
      DB_HOST: string
      DB_USER: string
      DB_PASS: string
      DB_DBNAME: string
    }
  }
}
export {}
