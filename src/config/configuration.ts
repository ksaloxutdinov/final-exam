import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'airways',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretKey',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
}));