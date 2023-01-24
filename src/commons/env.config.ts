import { registerAs } from '@nestjs/config';

export const envConfig = registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      userName: process.env.DATABASE_USERNAME,
      pass: process.env.DATABASE_PASSWORD,
      dbName: process.env.DATABASE_NAME,
    },
    apikey: {
      prefix: process.env.APP_PREFIX,
    },
  };
});
